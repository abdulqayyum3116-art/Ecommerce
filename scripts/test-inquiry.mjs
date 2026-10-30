import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";
import vm from "node:vm";

const code = ts.transpileModule(fs.readFileSync("app/api/inquiry/route.ts", "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const calls = [];
const env = { NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co", SUPABASE_SERVICE_ROLE_KEY: "test-secret" };
let upstreamStatus = 201;
let failNetwork = false;
const context = {
  exports: {}, Request, Response, URL, AbortSignal,
  process: { env }, console: { error() {} },
  fetch: async (url, options) => {
    calls.push({ url, options });
    if (failNetwork) throw new Error("Network unavailable");
    return new Response(null, { status: upstreamStatus });
  },
};
vm.runInNewContext(code, context);
const submit = (body) => context.exports.POST(new Request("http://localhost/api/inquiry", {
  method: "POST", body: JSON.stringify(body),
}));
const valid = { name: " Test User ", email: "test@example.com", phone: "+1 555 123 4567", primaryConcern: "Google Ads", storeUrl: "", message: "Audit my store" };

(async () => {
  for (const body of [null, [], { ...valid, name: " " }, { ...valid, phone: " " }, { ...valid, email: "invalid" }, { ...valid, primaryConcern: "unknown" }, { ...valid, storeUrl: "javascript:alert(1)" }, { ...valid, message: "x".repeat(5001) }]) {
    assert.equal((await submit(body)).status, 400);
  }
  assert.equal(calls.length, 0, "Invalid inquiries must not reach Supabase");
  assert.equal((await submit(valid)).status, 201);
  const saved = JSON.parse(calls[0].options.body);
  assert.equal(saved.name, "Test User");
  assert.equal(saved.source, "ecommerce-audit");
  assert.match(saved.message, /Phone: \+1 555 123 4567/);
  assert.match(saved.message, /Website: Not provided/);
  assert.match(saved.message, /Primary concern: Google Ads/);
  assert.match(saved.message, /Audit my store/);
  assert.equal((await submit({ ...valid, storeUrl: "https://example.com" })).status, 201);
  assert.match(JSON.parse(calls[1].options.body).message, /Website: https:\/\/example.com/);
  upstreamStatus = 403;
  assert.equal((await submit(valid)).status, 502);
  failNetwork = true;
  assert.equal((await submit(valid)).status, 502);
  delete env.SUPABASE_SERVICE_ROLE_KEY;
  assert.equal((await submit(valid)).status, 503);
  console.log("Inquiry checks passed: validation, optional URL, field mapping, storage failure, network failure, missing configuration.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
