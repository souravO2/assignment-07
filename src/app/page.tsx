import AllProduct from "@/components/homvepage/AllProduct";
import Hero from "@/components/homvepage/Hero";
import PriceDown from "@/components/homvepage/PriceDown";
import PriceUp from "@/components/homvepage/PriceUp";
import BackToTop from "@/components/shared/BackToTop";
import { ProductDetail } from "@/types/ProductDetail";

const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/products",
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

export default async function Home() {
  const data: ProductDetail[] = await DataPromise();
  return (
    <div>
      <Hero />
      <PriceUp data={data} />
      <PriceDown data={data} />
      <AllProduct data={data} />
      <BackToTop />
    </div>
  );
}
