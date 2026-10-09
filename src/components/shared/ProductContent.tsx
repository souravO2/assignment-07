import { ProductDetail } from "@/types/ProductDetail";
import { notFound } from "next/navigation";
import React from "react";
import ProductDetailCard from "./ProductDetailCard";

const ProductContent = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${id}`,
    { cache: "no-store" },
  );
  const data: ProductDetail = await res.json();
  if (!data) {
    notFound();
  }
  return <ProductDetailCard data={data} />;
};

export default ProductContent;
