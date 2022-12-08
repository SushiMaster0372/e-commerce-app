import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [toggleSidebar, setTogSidebar] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setTogSidebar(!toggleSidebar)}
        className="sidebar-icon"
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="nav container">
        <div className="logo">
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <ul className={toggleSidebar ? "sidebar" : "nav__items"}>
          <li>
            <Link to="">Women</Link>
          </li>
          <li>
            <Link to="">Men</Link>
          </li>
          <li>
            <Link to="">Accessories</Link>
          </li>
          <li>
            <Link to="">Electronics</Link>
          </li>
          <li>
            <Link to="">About us</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>

        <div className="nav__icons">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <i className="fa-regular fa-user"></i>
          </div>
          <div>
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
