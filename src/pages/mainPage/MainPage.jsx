import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsHead from "../../components/mainPageComponents/ProductsHead";
import ProductsList from "../../components/mainPageComponents/ProductsList";
import ProductsSlider from "../../components/mainPageComponents/ProductsSlider";
import Loader from "../../components/UI/loader/Loader";

import { getProducts } from "../../redux/products/productsSlice";
import { getSliderProducts } from "../../redux/products/sliderProductsSlice";
import "./main.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const isAllProductsLoading = useSelector((state) => state.products.loading);
  const isSliderProductsLoading = useSelector(
    (state) => state.sliderProducts.loading
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getSliderProducts(5));
  }, []);

  return (
    <main>
      <div className="slider">
        {isSliderProductsLoading ? (
          <div className="slider__content flex flex-center">
            <Loader />
          </div>
        ) : (
          <div className="slider__content">
            <ProductsSlider />
          </div>
        )}
      </div>

      <hr className="container margin-bottom-50" />

      <ProductsHead />
      {isAllProductsLoading ? (
        <div className="slider__content flex flex-center">
          <Loader />
        </div>
      ) : (
        <ProductsList />
      )}
      <div>nex</div>
    </main>
  );
};

export default MainPage;
