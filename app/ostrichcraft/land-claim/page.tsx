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
      <div className="p-4 bg-white/5 mt-6">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p>To make your first land claim, you will need <b>16 Dim</b> in your inventory.</p>
        <br></br>
        <p>Stand in the area you want to claim and do <code>/lands create</code> to begin! You'll be prompted to name the land, but you can always change it later. This will do an initial land claim of <b>9 chunks</b> (a 3x3 square). You can view the borders of this new claim with <code>/view</code>.</p>
      </div>
      
      <h2 className="text-2xl font-bold mt-6">Claim More Land</h2>
      <p>You can expand your claim into adjacent chunks by standing in one and doing <code>/claim</code>. Each individual chunk will cost <b>4 Dim</b>.</p>

      <h2 className="text-2xl font-bold mt-6">Land Management</h2>
      <p>Access the central menu by doing <code>/lands</code> (or even <code>/l</code> for short!)</p>
      <p>From here, you can add members, rename your land, and edit a variety of permission settings.</p>

      <h2 className="text-2xl font-bold mt-6">Command List</h2>
      <p>
        There are a few simple commands that will help you use the new land
        claiming system to its full potential.
      </p>

      <h3 className="text-xl font-semibold mt-4">Essentials</h3>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <code>/claim</code> — Claims the chunk you're currently standing in.
          (Press <code>F3 + G</code> to see chunk borders)
        </li>
        <li>
          <code>/view</code> — Displays nearby land borders in-game.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">Advanced</h3>
      <ul className="list-disc ml-6 mt-2 space-y-2">
        <li>
          <code>/unclaim</code> — Unclaims the chunk you're currently standing in.
          (Press <code>F3 + G</code> to see chunk borders)
        </li>
      </ul>
    </>

  );
}