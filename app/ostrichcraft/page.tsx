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
      <p>OstrichCraft is a highly-anticipated western-themed Minecraft server, season 8 in the <Link href="/" className="underline text-blue-400">FaunaCraft SMP Series</Link>. Its emphasis on cultivating a core theme with custom-developed datapacks makes it a unique entry.</p>
      <div className="flex gap-8 my-8 flex-col lg:flex-row lg:items-start">
        <div className="lg:w-1/2">
          <h2 id="faunacraft-enhanced" className="text-2xl font-bold">Join with FaunaCraft Enhanced</h2>
          <p>If you want the most immersive OstrichCraft experience, we highly recommend using our official launcher profile on Modrinth!</p>
          <br></br>
          <p><a href="https://modrinth.com/modpack/faunacraft-enhanced" target="_blank" className="underline text-blue-400">FaunaCraft Enhanced</a> is a collection of custom-configured mods that bring immersion, performance, and quality of life improvements to your game. And it takes just 2 minutes to install!</p>
        <details className="mt-8 border border-white/20 rounded-lg p-4">
          <summary className="cursor-pointer font-semibold text-white/50">I'd rather use the normal launcher
          </summary>
          <p className="mt-4">No worries! OstrichCraft doesn't <i>require</i> this modpack, we just recommend it. You can get all the same gameplay on the standard Minecraft launcher.</p>
          <ul className="list-disc list-inside">
            <li>Version: 1.21.11</li>
            <li>IP: ostrichcraft.apexmc.co</li>
          </ul>
        </details>
        </div>
        <div className="lg:w-1/2">
    <iframe
      className="w-full rounded-lg aspect-video shadow-lg"
      src="https://www.youtube.com/embed/namxLHUqaBA"
    />
  </div>
</div>
      {/* collapsed by default accordion */}
    </>
  );
}