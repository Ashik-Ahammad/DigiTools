import React, { use } from "react";
import Product from "../Product/Product";

const Products = ({ productsPromise, carts, setCarts }) => {
  const products = use(productsPromise);

  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-20  mt-10 mb-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 mt-20">
        {products.map((product) => (
          <Product key={product.id} product={product} carts={carts} setCarts={setCarts}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
