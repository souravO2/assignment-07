import { ProductDetail } from "@/types/ProductDetail";
import { notFound } from "next/navigation";
import React from "react";

const ProductDetailCard = ({ data }: { data: ProductDetail }) => {
  if (!data?.markets || data.markets.length === 0) {
    notFound();
  }
  const minimum = Math.min(...data.markets.map((item) => item.min));
  const maximum = Math.max(...data.markets.map((item) => item.max));

  return (
    <div className="container mx-auto flex flex-col gap-y-4 my-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-2xl mx-2 md:mx-0">
        <div className="flex flex-col md:flex-row items-left md:items-center gap-2">
          <span className="bg-green-50 p-2 rounded-2xl text-6xl w-fit">
            {data.image}
          </span>
          <div>
            <h1 className="text-4xl font-semibold">{data.nameBn}</h1>
            <span>প্রতি কেজি • {data.categoryNameBn}</span>
            <span className="text-xl font-semibold">
              {data.change.dir === "up" ? (
                <h2>
                  গতকালের তুলনায় আজ দাম বেড়েছে ·{" "}
                  {(data.today - data.yesterday).toLocaleString("bn-BD")} টাকা
                </h2>
              ) : data.change.dir === "down" ? (
                <h2>
                  গতকালের তুলনায় আজ দাম কমেছে ·{" "}
                  {(data.yesterday - data.today).toLocaleString("bn-BD")} টাকা
                </h2>
              ) : (
                <h2>গতকালের তুলনায় আজ দাম বাড়েনি</h2>
              )}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-center bg-green-50 p-2 rounded-2xl">
          <p>আজকের দাম</p>
          <h1 className="text-2xl font-bold">
            {data.today.toLocaleString("bn-BD")}
          </h1>
          <span className="font-normal">টাকা / কেজি</span>
          <div>
            {data.change.dir === "up" ? (
              <span className="px-4 py-2 text-sm font-semibold text-red-700">
                🔺{data.change.pct.toLocaleString("bn-BD")}%
              </span>
            ) : data.change.dir === "down" ? (
              <span className="px-4 py-2 text-sm font-semibold text-green-700">
                ▼{data.change.pct.toLocaleString("bn-BD").slice(1)}%
              </span>
            ) : (
              <span className="px-4 py-2 text-sm font-semibold text-green-700">
                <span className="text-green-700">–</span>
                {data.change.pct.toLocaleString("bn-BD")}%
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 rounded-2xl border border-gray-100 bg-white py-2 px-1 md:p-4 shadow-xl mx-1 md:mx-0 text-center md:text-left">
        <h1 className="text-xl font-semibold mt-2">দামের সারসংক্ষেপ</h1>
        <div className="flex justify-between gap-2 md:gap-4 text-center">
          <div className="border rounded-2xl border-gray-200 w-full p-4">
            <p>সর্বনিম্ন দাম</p>
            <h1 className="text-green-700 text-2xl font-bold">
              {minimum.toLocaleString("bn-BD")}{" "}
              <span className="text-lg">টাকা</span>
            </h1>
            <p>সবচেয়ে কম দামের বাজার</p>
          </div>
          <div className="border rounded-2xl border-gray-200 w-full p-4">
            <p>সর্বাধিক দাম</p>
            <h1 className="text-red-700 text-2xl font-bold">
              {maximum.toLocaleString("bn-BD")}{" "}
              <span className="text-lg">টাকা</span>
            </h1>
            <p>সবচেয়ে বেশি দামের বাজার</p>
          </div>
          <div className="border rounded-2xl border-gray-200 w-full p-4">
            <p>গড় দাম</p>
            <h1 className="text-green-700 text-2xl font-bold">
              {((minimum + maximum) / 2).toLocaleString("bn-BD")}{" "}
              <span className="text-lg">টাকা</span>
            </h1>
            <p>প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
        <div>
          <span className="text-left text-xl font-semibold">
            বাজারভিত্তিক আজকের দাম
          </span>
        </div>
        {/* Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-slate-300">
              <tr>
                <td className="px-2 py-3.5 text-left text-md md:text-lg font-bold text-slate-600">
                  বাজার
                </td>
                <td className="px-2 py-3.5 text-left text-md md:text-lg font-bold text-slate-600">
                  বিভাগ
                </td>
                <td className="px-2 py-3.5 text-right text-md md:text-lg font-bold text-slate-600">
                  সর্বনিম্ন
                </td>
                <td className="px-2 py-3.5 text-right text-md md:text-lg font-bold text-slate-600">
                  সর্বাধিক
                </td>
                <td className="px-2 py-3.5 text-right text-md md:text-lg font-bold text-slate-600">
                  গড়
                </td>
              </tr>
              {data.markets.map((item, id) => (
                <tr
                  key={id}
                  className="odd:bg-green-50 even:bg-white hover:bg-green-100"
                >
                  <td className="font-semibold px-2 text-left">
                    {item.market}
                  </td>
                  <td className="text-left">{item.division}</td>
                  <td className="px-2 py-3.5 text-right text-lg">
                    {item.min.toLocaleString("bn-BD")} টাকা
                  </td>
                  <td className="px-2 py-3.5 text-right text-lg">
                    {item.max.toLocaleString("bn-BD")} টাকা
                  </td>
                  <td className="px-2 py-3.5 text-right text-lg">
                    {((item.min + item.max) / 2).toLocaleString("bn-BD")} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
