import LoadingPage from "@/app/loading";
import ProductContent from "@/components/shared/ProductContent";
import React, { Suspense } from "react";

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ProductContent params={params} />
    </Suspense>
  );
};

export default ProductPage;
