import CategoryContent from "@/components/categoryPage/CategoryContent";
import { Suspense } from "react";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  return (
    <Suspense fallback={<div>লোড হচ্ছে...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;
