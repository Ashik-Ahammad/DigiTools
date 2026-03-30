import React from "react";
import cart from "../../assets/emptycart.png"
import { toast } from "react-toastify";

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
    <div className="container mx-auto px-6 md:px-12 lg:px-20 my-10 rounded-4xl p-10 shadow-md bg-base-100">

      <h2 className="text-2xl font-bold mb-2">Your Cart</h2>
      <p className="text-gray-500">
        You have {carts.length} item in your cart.
      </p>


      <div className="flex flex-col gap-6 mt-6">

        {carts.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            <img src={cart} alt="" className="mx-auto w-25 h-25"/>
            🛒 Your cart is empty. Please add some products.
          </div>
        )}


        {carts.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-base-100 shadow-sm rounded-2xl p-4 hover:shadow-md transition"
          >

            <div className="w-15 h-15 bg-base-200 rounded-full flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-8 object-contain"
              />
            </div>


            <div className="flex-1">

              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold">{item.name}</h2>

                <span
                  className={`badge text-white px-3 py-2 capitalize
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

              <p className="text-lg font-semibold mt-1">
                ${item.price}
                <span className="text-sm text-gray-500">
                  {" "}
                  /{item.period === "one-time" ? "One-Time" : item.period}
                </span>
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <button
                onClick={() => handleDelete(item.id)}
                className="font-extrabold text-red-500 hover:text-red-700 transition hover:underline hover:cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {carts.length > 0 && (
        <div className="text-right mt-10 text-xl font-bold flex justify-between items-center gap-4 mx-5">
          <div><h1 className="text-md font-light">Total:</h1></div>
          <div>
            ${carts.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </div>
        </div>
      )}
      <div>
        <button onClick={handleCheckout} className="btn w-full text-white border-none rounded-full 
        bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-pink-600 mt-5 py-7">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
