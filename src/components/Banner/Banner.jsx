import React from "react";

import BannerImage from "../../assets/banner.png";
import Dot from "../../assets/dot.png";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
        <div className="space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 bg-sky-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
            <img src={Dot} className="border rounded-full p-0.5"></img> New:
            AI-Powered Tools Available
          </div>

          <h1 className="lg:text-4xl sm:md:text-3xl font-bold text-blue-950">
            <span className="text-rotate">
              <span>
                <span>Supercharge Your Digital Workflow</span>
                <span>Power Up Your Daily Operations</span>
                <span>Ignite Your Digital Productivity</span>
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#627382] max-w-lg mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-primary hover:bg-transparent hover:text-blue-950 transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl shadow-red-500/30 flex items-center gap-2 sm:gap-3 text-white hover:cursor-pointer">
              Explore Products
            </button>
            <button className="bg-transparent hover:bg-primary hover:text-white transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl shadow-red-500/30 flex items-center gap-2 sm:gap-3 text-blue-950 hover:cursor-pointer">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%] xl:w-full 
             max-w-70 sm:max-w-87 md:max-w-105 lg:max-w-125 xl:max-w-150
             mx-auto lg:mx-0
             object-contain drop-shadow-2xl rounded-3xl 
             hover:scale-105 transition-transform duration-300"
            src={BannerImage}
            alt="BannerImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
