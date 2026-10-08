import LoadingPage from "@/app/loading";
import CategoryContent from "@/components/categoryPage/CategoryContent";
import { Suspense } from "react";

const CategoryPage = ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryPage;
