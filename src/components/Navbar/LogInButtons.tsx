"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxAvatar } from "react-icons/rx";
import { toast } from "sonner";

const LogInButtons = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span>Loading...</span>
      </div>
    );
  }
  const handleSignOutBtn = async () => {
    await signOut();
    toast.success("Successfully Logged Out.");
    redirect("/");
  };
  return (
    <div className="flex flex-col md:flex-row shrink-0 text-right gap-1 md:gap-2">
      {session?.user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 border-none">
            {session.user.image ? (
              <Image
                src={session.user.image}
                width={24}
                height={24}
                alt="user profile"
                className="rounded-full"
              />
            ) : (
              <RxAvatar className="w-6 h-6" />
            )}
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
              <button onClick={handleSignOutBtn} className="text-red-700">
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
