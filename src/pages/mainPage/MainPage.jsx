import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsHead from "../../components/mainPageComponents/ProductsHead";
import ProductsList from "../../components/mainPageComponents/ProductsList";
import ProductsSlider from "../../components/mainPageComponents/ProductsSlider";
import Loader from "../../components/UI/loader/Loader";

import { getProducts } from "../../redux/products/productsSlice";
import "./main.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <main>
      <div className="slider">
        {isLoading ? (
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
      {isLoading ? (
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
