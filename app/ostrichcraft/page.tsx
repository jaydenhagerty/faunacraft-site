import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OstrichCraft Wiki",
  description: "The central hub for all OstrichCraft info.",
  metadataBase: new URL("https://faunacraft.web.app/"),
  openGraph: {
    images: [
      {
        url: "images/ostrichcraft cover 1.png", // relative to /public
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["images/ostrichcraft cover 1.png"],
  },
};

export default function OstrichCraftPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">OstrichCraft</h1>
      <p className="mb-2">Launch Date: Feb 13, 2026</p>
      <p className="mb-6">OstrichCraft is the upcoming FaunaCraft server, launching soon!</p>
      <div className="bg-gray-200 p-4 rounded-lg">
        <p className="text-gray-600">Stay tuned for more updates!</p>
      </div>
    </div>
  );
}