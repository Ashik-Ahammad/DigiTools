import React from "react";

const Tab = ({ activeTab, handleTabChange, carts }) => {
  return (
    <div className="flex justify-center items-center px-2">
      <div className="tabs tabs-box bg-transparent gap-x-2 sm:gap-x-6 md:gap-x-10">
        
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-24 sm:w-32 md:w-40 text-xs sm:text-sm md:text-base ${
            activeTab === "products" && "bg-[#4F39F6] text-white"
          }`}
          aria-label="Products"
          defaultChecked
          onClick={() => handleTabChange("products")}
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-24 sm:w-32 md:w-40 text-xs sm:text-sm md:text-base ${
            activeTab === "cart" && "bg-[#4F39F6] text-white"
          }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => handleTabChange("cart")}
        />

      </div>
    </div>
  );
};

export default Tab;