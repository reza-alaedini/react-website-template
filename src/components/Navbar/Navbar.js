import React from "react";

import styles from "./Navbar.module.css";
import logo from "../../images/React.png";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.menu}>
          <li>Home Page</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Navbar;
