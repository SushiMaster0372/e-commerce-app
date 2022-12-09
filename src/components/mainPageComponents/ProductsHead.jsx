import React from "react";

const ProductsHead = () => {
  return (
    <div className="products__head">
      <div className="head__content">
        <ul className="head__nav">
          <li>All</li>
          <li>Women</li>
          <li>Men</li>
          <li>Accessories</li>
          <li>Electronics</li>
        </ul>
        <div className="head__filter">
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductsHead;
