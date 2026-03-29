import React from "react";

const Stats = () => {
  return (
    <div className="bg-[#4F39F6] text-white grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 py-14 mb-10">
      <div className="flex flex-col items-center justify-center border-r">
        <h1 className="text-6xl">50K+</h1>
        <p className="text-2xl mt-3">Active Users</p>
      </div>
      <div className="flex flex-col items-center justify-center border-r">
        <h1 className="text-6xl">200+</h1>
        <p className="text-2xl mt-3">Premium Tools</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl">4.9</h1>
        <p className="text-2xl mt-3">Rating</p>
      </div>
    </div>
  );
};

export default Stats;
