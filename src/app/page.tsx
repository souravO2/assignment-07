import AllProduct from "@/components/homvepage/AllProduct";
import Hero from "@/components/homvepage/Hero";
import PriceDown from "@/components/homvepage/PriceDown";
import PriceUp from "@/components/homvepage/PriceUp";

export default function Home() {
  return (
    <div>
      <Hero />
      <PriceUp />
      <PriceDown />
      <AllProduct />
    </div>
  );
}
