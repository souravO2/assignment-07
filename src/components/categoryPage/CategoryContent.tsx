import { ProductDetail } from "@/types/ProductDetail";
import { notFound } from "next/navigation";
import SortingCategoryData from "./SortingCategoryData";

const CategoryContent = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    { cache: "no-store" },
  );
  const data: ProductDetail[] = await res.json();
  // console.log(data);
  if (!data) {
    notFound();
  }
  const firstData = data[0];
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center gap-2 bg-white border border-gray-200 p-4 rounded-2xl">
        <span className="p-2 rounded-2xl text-4xl border border-gray-100">
          {firstData.categoryIcon}
        </span>
        <div>
          <h1 className="text-3xl font-bold">{firstData.categoryNameBn}</h1>
          <span>
            {data.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </span>
        </div>
      </div>
      <SortingCategoryData data={data} />
    </div>
  );
};

export default CategoryContent;
