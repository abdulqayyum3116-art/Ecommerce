import type { Metadata } from "next";

export const defaultSiteUrl = "https://ecommerce.codesquad.ai";

export function generateSeoMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${defaultSiteUrl}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "CodeSquad Ecommerce",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
