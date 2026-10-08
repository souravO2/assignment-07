"use client";

import { signIn, signUp } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { data: resData, error } = await signUp.email({
      name: data.name as string,
      email: data.email as string,
      password: data.password as string,
      callbackURL: "/signin",
    });
    // console.log(resData, error);
    if (data) {
      redirect("/signin");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleBtn = async () => {
    const res = await signIn.social({
      provider: "google",
    });
    return res;
  };
  const handleGitHubBtn = async () => {
    const res = await signIn.social({
      provider: "github",
    });
    return res;
  };
  return (
    <div className="flex flex-col justify-center items-center text-center m-4">
      <h1 className="text-2xl text-black font-extrabold text-center">
        অ্যাকাউন্ট তৈরি করুন
      </h1>
      <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
      <div className="bg-white rounded-2xl px-2 py-4 m-4">
        <form className="" onSubmit={onSubmit}>
          <fieldset className="fieldset border-none rounded-box w-xs md:w-sm max-w-sm border p-4">
            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Abul Kasem"
              required
            />

            <label className="label">ইমেইল</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="you@gmail.com"
              required
            />

            <label className="label">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              required
            />

            <button
              type="submit"
              className="btn btn-neutral bg-green-700 border-none mt-4"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-slate-300 text-black" />
          <span>অথবা</span>
          <span className="h-px flex-1 bg-slate-300" />
        </div>
        <div className="flex gap-y-2 gap-2 justify-center py-2">
          <button onClick={handleGoogleBtn} className="btn text-center">
            <FcGoogle /> Google
          </button>
          <button onClick={handleGitHubBtn} className="btn text-center">
            <FaGithub />
            GitHub
          </button>
        </div>
        <p className="py-2">
          অ্যাকাউন্ট আছে?{" "}
          <Link href={"/signin"} className="text-green-700 hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
      <Link href={"/"} className="text-slate-500">
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
};

export default SignUpPage;
