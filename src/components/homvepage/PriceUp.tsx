import { ProductDetail } from "@/types/ProductDetail";
import React from "react";
import ProductCard from "../shared/ProductCard";

const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
      {
        cache: "force-cache",
      },
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const PriceUp = async () => {
  const data: ProductDetail[] = await DataPromise();
  const priceUp: ProductDetail[] = data.filter(
    (item) => item.change.dir === "up",
  );
  const topSix = priceUp
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  console.log(topSix);
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold">🔺 আজ দাম বেড়েছে</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {topSix.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PriceUp;
