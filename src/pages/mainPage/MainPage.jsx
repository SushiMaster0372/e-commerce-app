import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsSlider from "../../components/mainPageComponents/ProductsSlider";

import { getProducts } from "../../redux/products/productsSlice";
import "./main.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <main>
      <div className="slider">
        <div className="slider__content">
          <ProductsSlider />
        </div>
      </div>

      <div>next</div>
    </main>
  );
};

export default MainPage;
