import React from "react";
import { toast } from "react-toastify";
import { icons } from "../../assets/icons.js";
import { CheckIcon } from "lucide-react";

const Product = ({ product, carts, setCarts }) => {
  const isAdded = carts.some(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isAdded) return;
    setCarts([...carts, product]);
    toast.success(`Subscription of ${product.name} added to cart successfully!`, {
        position: "top-right",
        autoClose: 3000
      });
  };

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-2xl p-6 relative hover:shadow-xl transition duration-300">
      <div
        className={`badge absolute right-5 top-5 capitalize px-3 py-3 text-xs font-medium rounded-full
        ${
          product.tagType === "popular"
            ? "badge-primary"
            : product.tagType === "new"
            ? "badge-success"
            : "badge-warning"
        }`}
      >
        {product.tag}
      </div>

      <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mb-4">
        <img src={icons[product.icon]} alt={product.name} className="w-6 h-6" />
      </div>

      <h2 className="text-xl font-bold mb-2">{product.name}</h2>

      <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">
        {product.description}
      </p>

      <p className="text-2xl font-bold mb-4">
        ${product.price}
        <span className="text-sm font-normal text-gray-400 ml-1">
          /{product.period === "one-time" ? "One-Time" : product.period}
        </span>
      </p>

      <ul className="mb-6 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="text-green-500"><CheckIcon /></span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`btn w-full text-white border-none rounded-full 
        ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-pink-600"
        }`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Product;