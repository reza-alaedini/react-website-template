import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../images/React.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.menu}>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "#5ccfda" : null };
              }}
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return { color: isActive ? "#5ccfda" : null };
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              style={({ isActive }) => {
                return { color: isActive ? "#5ccfda" : null };
              }}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
