import React from "react";
import ProductCard from "../shared/ProductCard";
import { ProductDetail } from "@/types/ProductDetail";

const AllProduct = ({ data }: { data: ProductDetail[] }) => {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold">সব পণ্য</h1>
      <p>মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
