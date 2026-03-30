import React from "react";

const Product = ({product}) => {
  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-2xl p-6 relative hover:shadow-xl transition duration-300">
      
      {/* Tag Badge */}
      <div
        className={`badge absolute right-5 top-5 capitalize px-3 py-3 text-xs font-medium
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

      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center mb-4">
        <img src={product.icon} alt={product.name} className="w-6 h-6" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 whitespace-pre-line">
        {product.description}
      </p>

      {/* Price */}
      <p className="text-2xl font-bold mb-4">
        ${product.price}
        <span className="text-sm font-normal text-gray-400 ml-1">
          /{product.period === "one-time" ? "One-Time" : product.period}
        </span>
      </p>

      {/* Features */}
      <ul className="mb-6 space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <span className="text-green-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="btn w-full text-white border-none rounded-full 
        bg-linear-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-pink-600">
        Buy Now
      </button>
    </div>
  );
};

export default Product;
