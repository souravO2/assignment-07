"use client";

import { ProductDetail } from "@/types/ProductDetail";
import ProductCard from "../shared/ProductCard";
import { useState } from "react";

const SortingCategoryData = ({ data }: { data: ProductDetail[] }) => {
  const [sort, setSort] = useState<
    "default" | "priceLowToHigh" | "priceHighToLow"
  >("default");
  const sortProduct = () => {
    const sortedProduct = [...data];
    if (sort === "priceLowToHigh") {
      sortedProduct.sort((a, b) => a.today - b.today);
    } else if (sort === "priceHighToLow") {
      sortedProduct.sort((a, b) => b.today - a.today);
    }
    return sortedProduct;
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl flex justify-between items-center px-4 my-4">
        <p className="m-4">
          মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="flex items-center gap-2">
          <p>সাজান</p>
          <select
            onChange={(e) =>
              setSort(
                e.target.value as
                  | "default"
                  | "priceLowToHigh"
                  | "priceHighToLow",
              )
            }
            className="select rounded-xl"
          >
            <option value={"default"}>ডিফল্ট</option>
            <option value={"priceLowToHigh"}>দাম: কম থেকে বেশি</option>
            <option value={"priceHighToLow"}>দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {sortProduct().map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default SortingCategoryData;
