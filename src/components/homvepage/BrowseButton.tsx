"use client";

const BrowseButton = () => {
  const handleClick = () => {
    document.getElementById("allProduct")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="btn font-semibold bg-green-700 hover:bg-green-800 text-white rounded-xl px-4 border-none shadow-none"
    >
      সব পণ্য দেখুন
    </button>
  );
};

export default BrowseButton;
