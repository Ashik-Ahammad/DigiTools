import React from "react";
import cart from "../../assets/emptycart.png";
import { toast } from "react-toastify";
import { icons } from "../../assets/icons.js";
import { HiCurrencyDollar } from "react-icons/hi";

const Cart = ({ carts, setCarts }) => {
  const handleDelete = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
    toast.error("Item deleted from cart!");
  };

  const handleCheckout = () => {
    if (carts.length === 0) return;

    setCarts([]);
    toast.success("Thank you for your purchase! Your order has been placed.");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 my-6 sm:my-10 rounded-3xl p-4 sm:p-6 md:p-10 shadow-md bg-base-100">
      
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Your Cart</h2>
      <p className="text-gray-500 text-sm sm:text-base">
        You have {carts.length} item in your cart.
      </p>


      <div className="flex flex-col gap-4 sm:gap-6 mt-6">
        
        {carts.length === 0 && (
          <div className="text-center text-gray-500 py-8 sm:py-10">
            <img
              src={cart}
              alt="empty cart"
              className="mx-auto w-20 h-20 sm:w-24 sm:h-24"
            />
            <p className="mt-2 text-sm sm:text-base">
              🛒 Your cart is empty. Please add some products.
            </p>
          </div>
        )}


        {carts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-base-100 shadow-sm rounded-2xl p-4 hover:shadow-md transition"
          >

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-base-200 rounded-full flex items-center justify-center">
              <img
                src={icons[item.icon]}
                alt={item.name}
                className="w-8 h-6 sm:w-10 sm:h-8 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {item.name}
                </h2>

                <span
                  className={`badge text-white text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1 capitalize
                  ${
                    item.tagType === "popular"
                      ? "badge-primary"
                      : item.tagType === "new"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {item.tag}
                </span>
              </div>

              <p className="text-base sm:text-lg font-semibold mt-1">
                ${item.price}
                <span className="text-xs sm:text-sm text-gray-500">
                  {" "}
                  /{item.period === "one-time" ? "One-Time" : item.period}
                </span>
              </p>
            </div>

            <div className="flex sm:flex-col items-end sm:items-end justify-between sm:justify-center w-full sm:w-auto">
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm sm:text-base font-semibold text-red-500 hover:text-red-700 transition hover:underline hover:cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {carts.length > 0 && (
        <div className="mt-8 sm:mt-10 text-lg sm:text-xl font-bold flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mx-1 sm:mx-5">
          <h1 className="text-sm sm:text-md font-light">Total:</h1>
          <div className="flex items-center text-lg sm:text-xl">
            <HiCurrencyDollar />
            {carts
              .reduce((sum, item) => sum + item.price, 0)
              .toFixed(2)}
          </div>
        </div>
      )}

      <div>
        <button
          onClick={handleCheckout}
          className="btn w-full text-white border-none rounded-full 
          bg-linear-to-r from-purple-600 to-blue-500 
          hover:from-purple-700 hover:to-pink-600 
          mt-5 py-4 sm:py-6 text-sm sm:text-base"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;