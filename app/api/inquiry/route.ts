const concerns = new Set([
  "Google Ads",
  "Meta Ads",
  "SEO & AI Search",
  "Social Media Handling",
  "Email & SMS",
  "Order Automation",
]);

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Invalid inquiry." }, { status: 400 });
    }
    data = body as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid inquiry." }, { status: 400 });
  }

  const limits = { name: 200, email: 254, phone: 50, storeUrl: 2048, primaryConcern: 100, message: 5000 };
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = data[key] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return Response.json({ error: `Please check the ${key} field.` }, { status: 400 });
    }
    fields[key] = value.trim();
  }

  const { name, email, phone, storeUrl, primaryConcern, message } = fields;
  if (!name || !email || !phone) {
    return Response.json({ error: "Name, email, and phone number are required." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !concerns.has(primaryConcern)) {
    return Response.json({ error: "Please check your email and selected service." }, { status: 400 });
  }
  if (storeUrl) {
    try {
      if (!["https:", "http:"].includes(new URL(storeUrl).protocol)) throw new Error();
    } catch {
      return Response.json({ error: "Please enter a valid website URL starting with https:// or http://." }, { status: 400 });
    }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ error: "The inquiry service is unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const headers: Record<string, string> = {
      apikey: key,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    };
    if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;

    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/medspa_leads`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name,
        email,
        source: "ecommerce-audit",
        payload: {
          phone,
          storeUrl: storeUrl || null,
          primaryConcern,
          message,
        },
      }),
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Inquiry storage failed with status", response.status);
      return Response.json({ error: "We couldn't save your inquiry. Please try again." }, { status: 502 });
    }
    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json({ error: "We couldn't confirm your inquiry was saved. Please try again later." }, { status: 502 });
  }
}
