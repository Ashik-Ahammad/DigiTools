import React from "react";

const Tab = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="tabs tabs-box gap-x-20 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="bg-linear-to-r from-pink-500 to-red-500 text-white"
          aria-label="Products"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="bg-linear-to-r from-pink-500 to-red-500 text-white"
          aria-label="Cart"
        />
      </div>
    </div>
  );
};

export default Tab;
