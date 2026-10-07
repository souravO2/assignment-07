import Image from "next/image";
import React from "react";
import DateDisplay from "./DateDisplay";
import Link from "next/link";
import Navlinks from "./Navlinks";
import Marquee from "./Marquee";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div>
        <div className="flex justify-between container mx-auto py-2 items-center">
          <Link href={"/"} className="flex gap-2 items-center">
            <div>
              <Image
                src={"/logo-icon.png"}
                width={50}
                height={50}
                className="bg-green-700 p-4 rounded-2xl"
                alt="Bazardor Logo"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">বাজার দর</h1>
              <DateDisplay />
            </div>
          </Link>
          <div className="flex gap-2">
            <button className="btn rounded-xl border-none">সাইন ইন</button>
            <button className="btn bg-green-700 text-white rounded-xl">
              সাইন আপ
            </button>
          </div>
        </div>
        <div>
          <Navlinks />
          <Marquee />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
