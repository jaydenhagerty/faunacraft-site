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
      <h1 className="text-3xl font-bold">Currency</h1>
      <p>All FaunaCraft servers operate using <b>Dim</b> as currency. These are special coins forged from diamond and/or emerald.</p>

      <h1 className="text-2xl font-bold mt-4">Exchange Rates</h1>
      <p>1 Diamond = 4 Dim</p>
      <p>(in other words, 1 Dim is worth 1/4 of a Diamond)</p>
      <br></br>
      <p>You can convert these items back and forth by visiting the bank located in Ostrich Overpass.</p>
    </>

  );
}