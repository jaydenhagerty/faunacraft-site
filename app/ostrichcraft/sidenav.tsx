'use client';

import Link from "next/link";
import { useState } from "react";

export default function OstrichSidenav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        {/* Hamburger Menu Button - Only visible on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 md:hidden bg-[#1f262b] p-2 rounded border border-white/20"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Backdrop - Only visible on small screens when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidenav */}
        <nav className={`
          fixed w-[250px] bg-[#1f262b] border-r border-white/20 py-4 px-2 flex-shrink-0 bottom-0 top-0 z-40
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <img src="/images/ostrichcraft logo transparent.png" alt="OstrichCraft Logo" className="mb-6 md:mt-0 mt-8" />
          <div className="flex flex-col space-y-2">
            <Link href="/ostrichcraft" className="text-white text-xl font-bold px-2 py-1" onClick={() => setIsOpen(false)}>Overview</Link>
            <Link href="/ostrichcraft/land-claim" className="text-white text-xl font-bold px-2 py-1" onClick={() => setIsOpen(false)}>Land Claiming</Link>
            <Link href="/ostrichcraft/guns" className="text-white text-xl font-bold px-2 py-1" onClick={() => setIsOpen(false)}>Guns</Link>
          </div>
            <Link href="/" className="text-white/40 text-xl font-bold px-2 py-1 bottom-5 absolute" onClick={() => setIsOpen(false)}>FaunaCraft</Link>
        </nav>
      </>
    );
}