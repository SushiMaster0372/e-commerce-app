import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../UI/button/Button";
import { getSliderProducts } from "../../redux/products/sliderProductsSlice";

const ProductsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSliderProducts(5));
  // }, []);

  const products = useSelector((state) => state.sliderProducts.sliderProducts);
  return (
    <Slider {...settings}>
      {products.map((productItem) => (
        <div key={productItem.id} className="slider__item">
          <div className="item__wrapper">
            <div className="item__text">
              <div className="item__title">
                <h3>{productItem.title}</h3>
              </div>
              <div className="item__description">
                <span>{productItem.description}</span>
              </div>
              <Button>Visit collection</Button>
            </div>
            <img src={productItem.image} alt="product" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductsSlider;
