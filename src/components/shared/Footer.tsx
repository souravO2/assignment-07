import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="bg-white flex flex-col md:flex-row text-center md:text-left gap-y-2 text-slate-500 justify-between py-6">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </div>
    </footer>
  );
};

export default Footer;
