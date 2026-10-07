import Image from "next/image";
import React from "react";
import DateDisplay from "./DateDisplay";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <nav className="bg-white overflow-x-hidden">
      <div className="container mx-auto flex items-center justify-between gap-2 py-2 px-2">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/logo-icon.png"
            width={50}
            height={50}
            className="shrink-0 rounded-2xl bg-green-700 p-3"
            alt="Bazardor Logo"
          />

          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
              বাজার দর
            </h1>
            <DateDisplay />
          </div>
        </Link>

        <div className="flex shrink-0 gap-1 md:gap-2">
          <Link href={"/signin"}>
            <button className="btn btn-sm md:btn-md rounded-xl border-none">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn btn-sm md:btn-md rounded-xl bg-green-700 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      </div>

      <div>
        <Navlinks />
        <Marquee />
      </div>
    </nav>
  );
};

export default Navbar;
