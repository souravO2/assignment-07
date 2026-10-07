import Image from "next/image";
import DateDisplay from "../Navbar/DateDisplay";

const Hero = () => {
  return (
    <main className="mx-4 my-6">
      <div className="container mx-auto overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-10 md:flex-row md:px-10 lg:px-14 lg:py-12">
          {/* Content */}
          <div className="flex w-full flex-col items-center text-center md:text-left md:items-start gap-5 md:w-3/5">
            <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
              <DateDisplay />
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              আজকের বাজারের দাম <span className="text-green-700">এক নজরে</span>
            </h1>

            <p className="max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <button className="btn rounded-xl border-0 bg-green-700 px-6 text-white shadow-sm hover:bg-green-800">
              সব পণ্য দেখুন
            </button>
          </div>

          {/* Image */}
          <div className="relative flex w-full justify-center md:w-2/5">
            <div className="absolute h-64 w-64 rounded-full bg-green-50 blur-3xl" />

            <Image
              src="/bazar-hero.png"
              width={400}
              height={400}
              alt="বাজারের পণ্য"
              priority
              className="relative h-auto w-64 object-contain sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
