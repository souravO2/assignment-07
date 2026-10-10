import { ProductDetail } from "@/types/ProductDetail";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
const DataPromise = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" },
    );
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};

const Marquee = async () => {
  const data: ProductDetail[] = await DataPromise();
  const filteredData: ProductDetail[] = data.filter(
    (item) => item.change.dir !== "flat",
  );
  return (
    <div className="flex bg-white text-black border-y border-black/10">
      <div className="container mx-auto flex items-center">
        <MarqueeText
          className="py-1"
          direction="right"
          pauseOnHover
          duration={10}
        >
          {filteredData.map((item, id) => (
            <span key={id} className="flex">
              <a href={`/products/${item.id}`}>
                <div className="flex gap-1">
                  <span>{item.image}</span>
                  <span className="font-medium">{item.nameBn}</span>
                  <span>{item.today.toLocaleString("bn-BD")} টাকা/{item.unit}</span>
                  {item.change.dir === "up" ? (
                    <span className="text-red-700">
                      🔺{item.change.pct.toLocaleString("bn-BD")}%
                    </span>
                  ) : (
                    <span className="text-green-700">
                      ▼{item.change.pct.toLocaleString("bn-BD").slice(1)}%
                    </span>
                  )}
                </div>
              </a>
              <span className="mx-4">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
