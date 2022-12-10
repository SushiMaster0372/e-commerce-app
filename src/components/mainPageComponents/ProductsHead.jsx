import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategories,
  getProductsByCategory,
  setActive,
  setAllProductsActive,
  toggleActive,
} from "../../redux/products/categorySlice";
import { getProducts } from "../../redux/products/productsSlice";

const ProductsHead = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const isActive = useSelector((state) => state.categories.active);
  const allProductsActive = useSelector(
    (state) => state.categories.allProductsActive
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const showProductsByCategory = (category, index) => {
    dispatch(getProductsByCategory(category));
    dispatch(setActive());
    dispatch(toggleActive(index));
    dispatch(setAllProductsActive(false));
  };

  const showAllProducts = () => {
    dispatch(getProducts());
    dispatch(setActive());
    dispatch(setAllProductsActive(true));
  };

  return (
    <div className="products__head">
      <div className="head__content">
        <ul className="head__nav">
          <li
            className={allProductsActive ? "active" : ""}
            onClick={() => showAllProducts()}
          >
            All
          </li>
          {categories.map((category, index) => (
            <li
              onClick={() => showProductsByCategory(category, index)}
              className={isActive[index] ? "active" : ""}
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="head__filter">
          <i className="fa-solid fa-filter"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductsHead;
