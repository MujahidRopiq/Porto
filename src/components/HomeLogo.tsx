"use client";
import Link from "next/link";

export default function HomeLogo() {
  return (
    <Link
      href="/"
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-4 transition-all duration-300 hover:bg-slate-50"
    >
      <span className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
        MR
      </span>

      <span className="absolute text-sm font-semibold text-blue-600 opacity-0 scale-75 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
        MUJAHID ROFIQ
      </span>
    </Link>
  );
}
