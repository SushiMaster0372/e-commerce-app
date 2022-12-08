import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CartPage from "../pages/cartPage/CartPage";
import MainPage from "../pages/mainPage/MainPage";
import Head from "../components/header/Head";
import NavBar from "../components/header/NavBar";

const AppRouter = () => {
  return (
    <>
      <Head />
      <NavBar />
      <Routes>
        <Route path="/home" element={<MainPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export default AppRouter;
