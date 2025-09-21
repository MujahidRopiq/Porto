"use client";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <Link
      href="/"
      className="group relative inline-block font-mono text-[17px] tracking-tight text-gray-900 no-underline transition-colors hover:text-gray-700"
    >
      <div className="relative inline-block">
        {/* MR - disappears on hover */}
        <span className="inline-block transition-opacity duration-200 group-hover:opacity-0">
          MR
        </span>

        {/* Full name - appears on hover */}
        <span className="absolute left-0 top-0 inline-block w-full text-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          MUJAHID ROFIQ
        </span>
      </div>
    </Link>
  );
}
