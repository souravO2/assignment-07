import ProductCard from "@/components/shared/ProductCard";
import { ProductDetail } from "@/types/ProductDetail";
import { notFound } from "next/navigation";
import React from "react";

const CategoryContent = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const data: ProductDetail[] = await res.json();
  console.log(data);
  if (!data) {
    notFound();
  }
  const firstData = data[0];
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-2 bg-white p-4 rounded-2xl">
        <span className="p-2 rounded-2xl text-4xl">
          {firstData.categoryIcon}
        </span>
        <div>
          <h1 className="text-3xl font-bold">{firstData.categoryNameBn}</h1>
          <span>
            {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </span>
        </div>
      </div>
      <div className="bg-white rounded-2xl">
        <p className="m-4">
          মোট {data.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {data.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryContent;
