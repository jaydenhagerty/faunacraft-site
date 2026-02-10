import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ostrich Overpass - OstrichCraft Wiki",
  description: "The spawn town of OstrichCraft, home to the bank, shops, and more!",
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
      <h1 className="text-3xl font-bold">Ostrich Overpass</h1>
      <p>Ostrich Overpass is the spawn town of the OstrichCraft SMP server. It features a few pre-built structures and some custom villagers with useful trades.</p>
    </>

  );
}