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
      <main className="flex-1 p-16 bg-[#13171b] text-white md:ml-[250px]">
        {children}
      </main>
    </div>
  );
}
