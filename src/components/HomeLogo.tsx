// src/components/HomeLogo.tsx
"use client";

import { useState } from "react";

export default function HomeLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-flex items-baseline cursor-pointer font-bold text-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* MR Container */}
      <span className="inline-flex items-baseline overflow-hidden">
        {/* M - stays fixed */}
        <span className="transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)]">
          M
        </span>

        {/* R - moves right with smooth easing */}
        <span className="transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] transform group-hover:translate-x-2">
          R
        </span>
      </span>

      {/* Hidden text that slides in */}
      <span className="absolute left-full ml-1 whitespace-nowrap">
        <span className="inline-flex items-baseline gap-1">
          <span className="font-light text-gray-600 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0">
            UJAHID
          </span>
          <span className="text-gray-400 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0">
            •
          </span>
          <span className="font-light text-gray-600 transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0">
            OFIQ
          </span>
        </span>
      </span>
    </div>
  );
}
