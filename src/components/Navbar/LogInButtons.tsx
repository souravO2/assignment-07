"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";

const LogInButtons = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col md:flex-row shrink-0 text-right gap-1 md:gap-2">
      {session?.user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 border-none">
            <RxAvatar className="w-6 h-6" />{" "}
            {session?.user.name.split(" ").slice(0, 1)} <RiArrowDropDownLine />
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-1 shadow-sm"
          >
            <li>
              <Link href={"/profile"}>👤 আমার প্রোফাইল</Link>
            </li>
            <li>
              <button onClick={() => signOut()} className="text-red-700">
                ↩ সাইন আউট
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <>
          <Link href={"/signin"}>
            <button className="btn btn-md rounded-xl border-none">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="btn btn-md rounded-xl bg-green-700 text-white">
              সাইন আপ
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default LogInButtons;
