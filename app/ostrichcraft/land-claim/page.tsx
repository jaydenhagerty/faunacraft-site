import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Land Claiming - OstrichCraft Wiki",
  description: "The central hub for all OstrichCraft info!",
  metadataBase: new URL("https://faunacraft.web.app/"),
  openGraph: {
    images: [
      {
        url: "images/ostrichcraft banner.png", // relative to /public
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["images/ostrichcraft banner.png"],
  },
};

export default function OstrichCraftWikiPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Land Claiming</h1>
      <p>Information about land claiming in OstrichCraft.</p>
    </>
  );
}