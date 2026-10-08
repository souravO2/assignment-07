import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col text-center m-8 gap-y-2">
      <h1 className="text-4xl font-bold">৪০৪</h1>
      <p> এই পাতাটি পাওয়া যায়নি।</p>
      <span>
        <Link
          href={"/"}
          className="text-green-700 hover:underline text-xl font-semibold"
        >
          হোমপেজে ফিরে যান
        </Link>
      </span>
    </div>
  );
};

export default NotFound;