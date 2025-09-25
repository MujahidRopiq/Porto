"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomeLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={"/"}>
      <div
        className="inline-flex items-baseline cursor-pointer font-bold text-2xl text-black group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* seperate the M and UJAHID bcs transition */}
        <div className="relative">
          <span>M</span>
          <span
            className={
              "absolute left-full top-0 transition-all duration-400 ease-out " +
              (isHovered ? "opacity-100 delay-100" : "opacity-0")
            }
          >
            UJAHID
          </span>
        </div>

        {/* this for spacing between two words */}
        <span className="mx-[0.9px]"></span>

        {/* seperate the R and OFIQ bcs transition */}
        <div className="relative">
          <div
            className={
              "inline-flex items-baseline transition-transform duration-400 ease-out " +
              (isHovered
                ? "translate-x-24 hoverIn-bounce"
                : "translate-x-0 delay-150 hoverOut-bounce")
            }
          >
            <span>R</span>
            <span
              className={
                "transition-all duration-400 ease-out " +
                (isHovered ? "opacity-100 delay-100" : "opacity-0")
              }
            >
              OFIQ
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
