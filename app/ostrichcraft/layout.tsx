// app/ostrichcraft/layout.tsx
import type { ReactNode } from "react";
import Link from "next/link";
import OstrichSidenav from "./sidenav";

export default function OstrichLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <OstrichSidenav />

      {/* Main content */}
      <main className="flex-1 p-6 bg-[#13171b] text-white md:ml-[250px] md:pt-6 pt-16">
        {children}
      </main>
    </div>
  );
}
