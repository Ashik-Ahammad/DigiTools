import React from 'react';

const Product = () => {
    return (
        <div className="flex justify-center items-center">
      <div className="tabs tabs-box gap-x-20 bg-transparent ">
        <input
          type="radio"
          name="my_tabs_1"
        //   className={`tab rounded-full w-50 ${activeTab === "models" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
          aria-label="Models"
          defaultChecked
        //   onClick={() => {
        //     handleTabChange("models");
        //   }}
        />
        <input
          type="radio"
          name="my_tabs_1"
        //   className={`tab rounded-full w-50 ${activeTab === "cart" && "bg-linear-to-r from-pink-500 to-red-500 text-white"}`}
          aria-label="Cart"
        //   onClick={() => {
        //     handleTabChange("cart");
        //   }}
        />
      </div>
    </div>
    );
};

export default Product;