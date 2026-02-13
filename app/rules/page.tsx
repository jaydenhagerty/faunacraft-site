import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FaunaCraft Server Rules",
  description:
    "Official FaunaCraft server rules.",
  openGraph: {
    title: "FaunaCraft Server Rules",
    description:
      "• No stealing high-value items\n• No griefing, except possibly during events when it doesn't do irreversible damage and would add to the lore intrigue\n• Pay for shop items\n• Keep combat fun, don't be a jerk\n• Your base must be on the main island\n• No exploits\n• Don't harm the server experience\nAnd more (click this link for a more detailed list)",
    url: "https://faunacraft.web.app/",
  },
  metadataBase: new URL("https://faunacraft.web.app/"),
};


export default function OstrichCraftWikiPage() {
  return (
    <div className="flex-1 bg-[#13171b] text-white p-8 h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold">When you play on our servers, you agree to follow these rules:</h1>
      <ul>
        <li>Do not steal items of high value from other people's chests</li>
        <li>Do not grief other players or builds, except possibly during events when it doesn't do irreversible damage and would add to the lore intrigue.</li>
        <li>Pay for all the items you take from a shop</li>
        <li>Keep combat fun, and don’t be a jerk</li>
        <li>Live in the visible dynmap area (base must be on the island)</li>
        <li>Do not use unintended exploits to get banned items or large amounts of items</li>
        <li>Do not participate in anything that harms the server experience for other players</li>
      </ul>
    </div>

  );
}