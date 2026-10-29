import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Product Video Creation for Ecommerce | CodeSquad",
  description:
    "Short product videos for ads, product pages and social: demos, unboxings and UGC-style clips made to sell on Meta, TikTok, YouTube and your store.",
  path: "/services/product-video",
});

export default function ProductVideoPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 04 — Product Video"
      h1="Product videos that show why it's worth buying."
      leadParagraph="Video is what stops the scroll and answers a shopper's questions before they ask. We create short product videos for your ads, product pages and social channels, built to sell rather than just look nice."
      problemHeading="Static photos can't keep up with how people shop now."
      problemDescription="Ad platforms reward fresh video, and shoppers want to see a product in use before they buy. Most brands don't have the time or setup to produce enough of it."
      problemPoints={[
        "Ads relying on the same product photos, so results fade quickly.",
        "Product pages with no video showing size, texture or how the product works.",
        "Videos made for brand awareness that never mention why someone should buy.",
        "No consistent supply of new video to keep ad campaigns fresh.",
      ]}
      solutionHeading="Short, sales-focused videos in every format you need."
      solutionDescription="We plan, script and produce product videos in the sizes each channel needs, then feed them into your Meta and Google campaigns and onto your product pages."
      deliverables={[
        {
          title: "Ad Creatives",
          description: "Short videos with strong opening hooks, made for Meta, TikTok and YouTube ads.",
        },
        {
          title: "Product Page Videos",
          description: "Clear demos showing the product in use, its size and its key features.",
        },
        {
          title: "UGC-Style Videos",
          description: "Natural, creator-style clips and reviews that feel native to social feeds.",
        },
        {
          title: "Unboxing & How-To",
          description: "Unboxing, setup and how-to videos that answer questions before a shopper asks.",
        },
        {
          title: "Every Format",
          description: "Vertical, square and widescreen versions with captions, ready for each platform.",
        },
        {
          title: "Testing Variations",
          description: "Several hooks and cuts of each video, so your ad campaigns can test what sells best.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Brief & Ideas",
          description: "Choosing products, angles and hooks based on what your buyers care about.",
        },
        {
          step: "Step 02",
          title: "Script & Plan",
          description: "Writing scripts and shot lists for each video and format.",
        },
        {
          step: "Step 03",
          title: "Production & Edit",
          description: "Filming and editing, with captions and versions for every platform.",
        },
        {
          step: "Step 04",
          title: "Launch & Learn",
          description: "Running the videos in your ads, tracking which ones sell, and making more of the winners.",
        },
      ]}
    />
  );
}
