import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OstrichCraft Wiki",
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

export default function OverviewPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Overview</h1>
      <img src="/images/ostrichcraft banner.png" alt="OstrichCraft Banner" className="my-6 rounded-lg shadow-lg max-h-[400px] w-full object-cover" />
      <p>OstrichCraft is a highly-anticipated western-themed Minecraft server, season 8 in the <Link href="/" className="underline text-blue-400">FaunaCraft</Link> series. Its emphasis on cultivating a core theme with custom-developed datapacks makes it a unique entry in the series.</p>
      <h2 className="text-2xl font-bold mt-6">Getting Started</h2>
      <p>If you want the most immersive OstrichCraft experience, we highly recommend using our official launcher profile on Modrinth!</p>
    </>
  );
}