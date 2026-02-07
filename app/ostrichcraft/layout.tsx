// app/ostrichcraft/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";

export default function OstrichLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <nav className="fixed w-[250px] bg-[#1f262b] border-r border-white/20 py-4 px-2 flex-shrink-0 bottom-0 top-0">
        <img src="/images/ostrichcraft logo transparent.png" alt="OstrichCraft Logo" className="mb-6" />
        <div className="flex flex-col space-y-2">
          <Link href="/ostrichcraft" className="text-white text-xl font-bold px-2 py-1">Overview</Link>
          <Link href="/ostrichcraft/land-claim" className="text-white text-xl font-bold px-2 py-1">Land Claiming</Link>
          <Link href="/ostrichcraft/guns" className="text-white text-xl font-bold px-2 py-1">Guns</Link>
        </div>
          <Link href="/" className="text-white/40 text-xl font-bold px-2 py-1 bottom-5 absolute">FaunaCraft</Link>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-6 bg-[#13171b] text-white ml-[250px]">
        {children}
      </main>
    </div>
  );
}
