import ServiceTemplate from "@/components/services/ServiceTemplate";
import { generateSeoMetadata } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Social Media Handling for Ecommerce | CodeSquad",
  description:
    "Social media handling for ecommerce brands: content strategy, posts, product videos, publishing, comments and DMs, and performance reporting.",
  path: "/services/social-media-handling",
});

export default function SocialMediaHandlingPage() {
  return (
    <ServiceTemplate
      eyebrow="Service 04 — Social Media Handling"
      h1="Social media that keeps your brand active and your buyers engaged."
      leadParagraph="From planning posts and creating product videos to publishing content and replying to your community, we handle your brand's social presence so your team can focus on the business."
      problemHeading="Your social channels need more than an occasional post."
      problemDescription="Keeping a brand active takes consistent content, useful conversations and time to learn what works. When social media is squeezed between other tasks, shoppers notice the gaps."
      problemPoints={[
        "Inconsistent posting and no clear content calendar or brand voice.",
        "Too few fresh posts and product videos to keep shoppers interested.",
        "Unanswered comments and DMs that leave potential buyers waiting.",
        "Reports that count likes without showing which content earns attention and engagement.",
      ]}
      solutionHeading="Your content, publishing and community, handled together."
      solutionDescription="We plan and create content, publish approved posts, manage everyday conversations and use performance insights to improve the next round. Product video creation is included, with paid campaign management available through our Meta Ads and Google Ads services."
      leadPlatformNotice="We agree on social channels, posting frequency and response hours with your team. Customer issues that need your team's help are escalated to you."
      deliverables={[
        {
          title: "Strategy & Content Calendar",
          description: "A clear brand voice, content themes and publishing plan built around your products, audience and business goals.",
        },
        {
          title: "Posts & Captions",
          description: "Branded graphics, carousels, captions and relevant hashtags that keep your social presence consistent.",
        },
        {
          title: "Video Creation",
          description: "Product demos, reels, UGC-style clips and unboxings, edited with captions and formats for social, ads and product pages.",
        },
        {
          title: "Scheduling & Publishing",
          description: "Approved content prepared and published across your agreed social channels on a consistent schedule.",
        },
        {
          title: "Community Management",
          description: "Comments and DMs handled in your brand's voice during agreed response hours, with customer issues escalated to your team.",
        },
        {
          title: "Reporting & Optimization",
          description: "Clear reporting on reach, engagement and content performance, with practical changes to improve future posts and videos.",
        },
      ]}
      processSteps={[
        {
          step: "Step 01",
          title: "Audit & Plan",
          description: "Review your channels and audience, agree on goals and brand voice, and build the content calendar.",
        },
        {
          step: "Step 02",
          title: "Create & Approve",
          description: "Create posts, captions and product videos, then get your team's approval before publishing.",
        },
        {
          step: "Step 03",
          title: "Publish & Engage",
          description: "Schedule approved content, respond to comments and DMs, and escalate customer issues when needed.",
        },
        {
          step: "Step 04",
          title: "Report & Improve",
          description: "Review reach, engagement and content performance, then refine the next calendar using what we learn.",
        },
      ]}
    />
  );
}
