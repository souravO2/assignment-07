"use client";

import { signOut, updateUser, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const ProfilePage = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span>Loading...</span>
      </div>
    );
  }
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await updateUser({
      name: userData.name as string,
    });
    return resData;
  };
  const handleSignOutBtn = async () => {
    (await signOut(), redirect("/"));
  };
  return (
    <div className="max-w-4xl mx-auto w-full m-4 flex flex-col gap-y-4">
      <div className="my-4 mx-2">
        <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
        <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
      </div>
      <div className="flex justify-between items-center bg-white rounded-2xl p-4 mx-2">
        <div className="flex gap-2 items-center">
          {data?.user.image ? (
            <Image
              src={data?.user.image}
              alt="user profile photo"
              width={60}
              height={60}
              className="rounded-2xl"
            />
          ) : (
            <RxAvatar className="w-16 h-16" />
          )}
          <div>
            <h1 className="text-xl font-semibold">{data?.user.name}</h1>
            <p>{data?.user.email}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleSignOutBtn}
            className="btn border-none text-red-700"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4 mx-2">
        <h1 className="text-xl font-semibold">তথ্য</h1>
        <form className="" onSubmit={handleUpdateUser}>
          <fieldset className="fieldset border-none rounded-box w-full border p-4">
            <label className="label">নাম</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Enter your new name"
              required
            />

            <button
              type="submit"
              className="btn btn-neutral bg-green-700 border-none mt-4"
            >
              আপডেট
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
