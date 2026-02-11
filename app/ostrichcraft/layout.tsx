// app/ostrichcraft/layout.tsx
"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import OstrichSidenav from "./sidenav";

export default function OstrichLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMapPage = pathname === "/ostrichcraft/map";
  console.log("Current pathname:", pathname);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <OstrichSidenav />

      {/* Main content */}
      <main
        className={`flex-1 bg-[#13171b] text-white md:ml-[250px] ${
          isMapPage ? "p-0" : "md:p-16 pt-16 p-4"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
