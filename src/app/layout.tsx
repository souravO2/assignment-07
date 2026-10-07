import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const hindShiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bazardor",
  description: "Food Price Update App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindShiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-green-50">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
