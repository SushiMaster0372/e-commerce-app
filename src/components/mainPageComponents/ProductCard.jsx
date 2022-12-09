import React from "react";
import { getRateOfProduct } from "../../utils/getRateOfProduct";
import Button from "../UI/button/Button";

const ProductCard = ({ productItem }) => {
  const rateArray = getRateOfProduct(productItem.rating.rate);

  return (
    <div className="product__wrapper">
      <div className="product__content">
        <div className="add-to-cart">
          <Button>Add to cart</Button>
        </div>

        <div className="product__img">
          <img src={productItem.image} alt="" />
        </div>

        <div className="product__title">
          <h6>{productItem.title}</h6>
        </div>

        <div className="product__options">
          <div className="product__price">
            <span>{productItem.price}$</span>
          </div>

          <div className="product__rate">
            <span>{productItem.rating.count}</span>
            {rateArray.map((rate, index) =>
              rate ? (
                <i key={index} className="fa-solid fa-star"></i>
              ) : (
                <i key={index} className="fa-regular fa-star"></i>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
