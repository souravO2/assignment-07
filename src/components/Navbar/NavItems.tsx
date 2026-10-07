"use client";

import { Categorytype } from "@/types/CategoryType";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ data }: { data: Categorytype[] }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        className={`link no-underline text-black rounded-xl px-2 py-1 ${
          pathname === "/"
            ? "bg-green-700/10 text-green-700"
            : "hover:bg-green-700/10"
        }`}
        href="/"
      >
        ⌂ হোম
      </Link>
      {data.map((item) => {
        const href = `/category/${item.slug}`;

        return (
          <Link
            key={item.id}
            className={`link no-underline text-black rounded-xl md:mx-2 px-2 py-1 ${
              pathname === href
                ? "bg-green-700/10 text-green-700"
                : "hover:bg-green-700/10"
            }`}
            href={href}
          >
            <span className="flex gap-0.5">
              <span>{item.icon}</span>
              <span>{item.nameBn}</span>
            </span>
          </Link>
        );
      })}
    </>
  );
};

export default NavItems;
