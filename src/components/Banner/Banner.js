import React from "react";

import styles from "./banner.module.css";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="banner-img" />
      <div className={styles.bannerText}>
        <h1>React JS</h1>
        <p>Sample Template Made With <span>React.js</span></p>
      </div>
    </div>
  );
};

export default Banner;
