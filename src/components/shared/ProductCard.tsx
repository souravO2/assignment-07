import { ProductDetail } from "@/types/ProductDetail";
import Link from "next/link";
import React from "react";

const ProductCard = ({ data }: { data: ProductDetail }) => {
  return (
    <Link
      href={`/products/${data.id}`}
      className="p-4 rounded-2xl bg-white flex flex-col gap-y-2 mx-4 border border-slate-200 group hover:border-green-700/70"
    >
      <div className="flex items-center gap-2">
        <span className="bg-green-50 p-2 rounded-2xl text-4xl border border-gray-200">
          {data.image}
        </span>
        <div>
          <h1 className="text-xl font-semibold group-hover:text-green-700">
            {data.nameBn}
          </h1>
          <span>প্রতি কেজি</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p>আজকের দাম</p>
          <h1 className="text-2xl font-bold group-hover:text-green-700">
            {data.today.toLocaleString("bn-BD")}{" "}
            <span className="font-normal text-xl">টাকা</span>
          </h1>
        </div>
        <div>
          {data.change.dir === "up" ? (
            <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
              🔺{data.change.pct.toLocaleString("bn-BD")}%
            </span>
          ) : data.change.dir === "down" ? (
            <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              ▼{data.change.pct.toLocaleString("bn-BD").slice(1)}%
            </span>
          ) : (
            <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <span className="text-green-700">–</span>
              {data.change.pct.toLocaleString("bn-BD")}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
