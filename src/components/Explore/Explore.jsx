import React from "react";

const Explore = () => {
  return (
    <div>
      <div className=" bg-[#4F39F6] flex flex-col items-center justify-center text-center  py-28 px-6 gap-y-3 ">
        <h1 className="text-4xl text-white font-bold">Ready to Transform Your Workflow?</h1>
        <p className="text-white">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 my-3 ">
          <button className="bg-white hover:bg-transparent hover:text-white transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl shadow-red-500/30 flex items-center gap-2 sm:gap-3 text-primart hover:cursor-pointer hover:border-white hover:border">
            Explore Products
          </button>
          <button className="bg- border border-white text-white hover:bg-white hover:text-primary transition-all px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl shadow-red-500/30 flex items-center gap-2 sm:gap-3  hover:cursor-pointer ">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
