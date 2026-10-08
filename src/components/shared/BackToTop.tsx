"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={handleBackToTop}
          className="btn fixed right-2 bottom-2 sm:right-10 sm:bottom-10 md:right-15 md:bottom-15 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition hover:bg-green-800"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
