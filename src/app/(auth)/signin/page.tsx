"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SignInPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const { data: resData, error } = await signIn.email({
      email: data.email as string,
      password: data.password as string,
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(resData, error);
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
        সাইন ইন করুন
      </h1>
      <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
      <div className="bg-white rounded-2xl px-2 py-4 m-4">
        <form className="" onSubmit={onSubmit}>
          <fieldset className="fieldset border-none rounded-box w-xs md:w-sm max-w-sm border p-4">
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
              সাইন ইন
            </button>
          </fieldset>
          <p>
            অ্যাকাউন্ট নেই?{" "}
            <Link href={"/signup"} className="text-green-700 hover:underline">
              সাইন আপ করুন
            </Link>
          </p>
        </form>
        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-slate-300 text-black"/>
          <span>অথবা</span>
          <span className="h-px flex-1 bg-slate-300"/>
        </div>
        <div className="flex gap-y-2 gap-2 justify-center">
          <button onClick={handleGoogleBtn} className="btn text-center">
            <FcGoogle /> Google
          </button>
          <button onClick={handleGitHubBtn} className="btn text-center">
            <FaGithub />
            GitHub
          </button>
        </div>
      </div>
      <Link href={"/"} className="text-slate-500">← হোম পেজে ফিরে যান</Link>
    </div>
  );
};

export default SignInPage;
