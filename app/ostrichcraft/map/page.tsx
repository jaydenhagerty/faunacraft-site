import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency - OstrichCraft Wiki",
  description: "An explanation of how currency works on OstrichCraft, including exchange rates and where to convert your items.",
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
      {/* this component will be a button that send the user to the page http://ostrichcraft.apexmc.co:8123 */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">OstrichCraft Map</h1>
        <p className="text-lg mb-8">Click below to view the live map of Ostrich Island.</p>
        <a
          href="http://ostrichcraft.apexmc.co:8123/?worldname=OstrichCraft%20World&mapname=flat&zoom=3&x=-5345&y=64&z=-5881"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-100"
        >
          View Map
        </a>
      </div>
    </>

  );
}