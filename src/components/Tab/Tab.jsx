import React from "react";

const Tab = ({ activeTab, handleTabChange, carts}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="tabs tabs-box bg-transparent gap-x-15">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "products" && "bg-[#4F39F6] text-white"}`}
          aria-label="Products"
          defaultChecked
          onClick={() => {
            handleTabChange("products");
          }}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "cart" && "bg-[#4F39F6] text-white"}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => {
            handleTabChange("cart");
          }}
        />
      </div>
    </div>
  );
};

export default Tab;
