"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// --- Data Structure ---
const servers = {
  HippoCraft: {
    title: "HippoCraft",
    date: "Sept 2020 - Nov 2020",
    summary: "HippoCraft was the first FaunaCraft server, launched in September 2020.",
    images: ["Hippo SS1.png", "Hippo SS2.png", "Hippo SS3.png", "Hippo SS4.png"]
  },
  IguanaCraft: {
    title: "IguanaCraft",
    date: "Nov 2020 - Apr 2021",
    summary: "IguanaCraft was the second FaunaCraft server, launched in November 2020.",
    images: ["Iguana SS1.png", "Iguana SS2.png", "Iguana SS3.png", "Iguana SS4.png"]
  },
  JaguarCraft: {
    title: "JaguarCraft",
    date: "Dec 2021 - July 2022",
    summary: "JaguarCraft was the third FaunaCraft server, launched in December 2021.",
    images: []
  },
  KoalaCraft: {
    title: "KoalaCraft",
    date: "Oct 2022 - Feb 2023",
    summary: "KoalaCraft was the fourth FaunaCraft server, launched in October 2022.",
    images: []
  },
  LobsterCraft: {
    title: "LobsterCraft",
    date: "June 2023 - Sept 2023",
    summary: "LobsterCraft was the fifth FaunaCraft server, launched in June 2023.",
    images: []
  },
  MooseCraft: {
    title: "MooseCraft",
    date: "Dec 2023 - March 2024",
    summary: "MooseCraft was the sixth FaunaCraft server, launched in December 2023.",
    images: []
  },
  NarwhalCraft: {
    title: "NarwhalCraft",
    date: "June 2024 - Jan 2025",
    summary: "NarwhalCraft is the seventh FaunaCraft server, launched in June 2024.",
    images: []
  },
  OstrichCraft: {
    title: "OstrichCraft",
    date: "Feb 13, 2026",
    summary: "The latest FaunaCraft server. OstrichCraft is a western-themed SMP with ground-breaking datapacks and custom mechanics.",
    images: []
  },
};

export default function FaunaCraftPage() {
  const [selectedServer, setSelectedServer] = useState<null | keyof typeof servers>(null);
  const [isSmall, setIsSmall] = useState(false);

  // Handle the "small screen" logic from your script.js
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 1150);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const serverData = selectedServer ? servers[selectedServer] : null;

  return (
    <main className=" min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black">
      {/* Inline Styles for Animations and Fonts */}
      <style jsx global>{`
        @font-face {
          font-family: 'Minecraft Ten';
          src: url('/fonts/mc-ten-lowercase-alt.ttf') format('truetype');
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .bg-radial-custom {
          background: radial-gradient(circle, #13171b 0%, rgba(0, 0, 0, 1) 100%);
        }
      `}</style>

        {/* bg-[#13171b]/80 backdrop-blur-sm border-b border-white/20 */}
      <nav className="fixed z-50 top-0 left-0 w-full "> 
        <div className="mx-auto px-16 py-3 flex items-center justify-between">
          {/* <img src="/images/FAUNACRAFT LOGO transparent.png" alt="FaunaCraft Logo" className="max-h-[40px] animate-fade-in opacity-0" style={{ animationDelay: `1200ms` }}/> */}

          <div className="flex items-center gap-5">
            {/* <a className="hover:underline">About</a> */}
            {/* <a className="hover:underline">Contact</a> */}
          </div>
        </div>
      </nav>
      <div className="bg-radial-custom min-h-screen w-full grid place-items-center relative top-0">
        {/* <img src="/images/Hippo SS1.png" alt="HippoCraft Screenshot" className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"/> */}
        <div className="max-w-[90%] py-[30px] w-full">
          <div className="flex flex-row animate-fade-in opacity-0 items-center gap-1 font-bold text-2xl justify-center" style={{ animationDelay: `1200ms` }}>
            <p className='hidden sm:block'>We are</p>
            <img src="/images/FAUNACRAFT LOGO transparent.png" alt="FaunaCraft Logo" className="max-h-[60px]"/>
          </div>
          {/* Icons Row */}
          <div className="flex items-center gap-0 overflow-hidden font-display">
            {Object.keys(servers).map((key, index) => (
              <div
                key={key}
                onClick={() => setSelectedServer(key as keyof typeof servers)}
                className={`server-button group flex-1 text-center cursor-pointer overflow-hidden py-[30px] opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <img 
                  src={`/icons/${key.replace('Craft', '')}.png`} 
                  alt={key}
                  className={`block w-full transition-transform duration-300 group-hover:-translate-y-[15px]`}
                />
                {!isSmall && (
                  <p className={`capitalize opacity-0 overflow-visible translate-y-[10px] transition-all duration-300 text-[1.25rem] font-semibold group-hover:opacity-100 group-hover:translate-y-0`}>
                    {key}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Server Viewer */}
          {serverData && (
            <div className="mt-4 border border-white/20 p-5 bg-[#13171b] animate-fade-in block">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h1 className="text-4xl font-bold mb-1">{serverData.title}</h1>
                  <p className="text-white/70">{serverData.date}</p>
                </div>
                <Link href={`/${selectedServer?.toLowerCase()}`} className="border border-white/20 p-5 bg-[#1f262b] cursor-pointer font-semibold hover:bg-[#2a3238] transition-colors">
                  See More
                </Link>
              </div>
              
              <br />
              <p>{serverData.summary}</p>
              <br />

              {/* Screenshots Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-0">
                {serverData.images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={`/images/${img}`} 
                    alt="screenshot" 
                    className="w-full object-cover aspect-video"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="bg-[#13171b] text-white py-32 px-8 flex justify-center relative">
          <img src="/images/Hippo SS1.png" alt="HippoCraft Screenshot" className="absolute w-full h-full object-cover opacity-10 pointer-events-none top-0"/>
        <div className='max-w-[800px]'>
          <h1 className="text-3xl font-bold">Community-focussed Minecraft servers since 2020.</h1>
          <p>Beautiful builds, engaging roleplay, and a tight-knit group of friends make for incredibly memorable servers every time.</p>
        </div>
      </section>
      <section className="bg-[#13171b] text-white py-16 px-8 flex justify-center">
        <div className="flex flex-col sm:flex-row gap-8 items-center max-w-[800px] text-center sm:text-left">
          <img src="/icons/Ostrich.png" alt="Ostrich Icon"/>
          <div>
            <h2 className="text-3xl font-bold">OstrichCraft is now live!</h2>
            <p className="text-lg mb-6">Our latest Minecraft server is an epic journey into the wild west.</p>
            <Link href="/ostrichcraft" className="inline-block bg-[#1f262b] border border-white/20 px-6 py-3 font-semibold hover:bg-[#2a3238] transition-colors">
              Explore OstrichCraft
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}