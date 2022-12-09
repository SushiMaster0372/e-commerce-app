import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="products__wrapper">
      <div className="products__content">
        {products.map((productItem) => (
          <ProductCard key={productItem.id} productItem={productItem} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
