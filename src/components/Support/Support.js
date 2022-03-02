import React from "react";

import styles from "./Support.module.css";
import apple from "../../images/apple.png";
import samsung from "../../images/samsung.webp";
import xiaomi from "../../images/xiaomi.png";

const Support = () => {
  return (
    <div className={styles.container}>
      <h3>Who Supports Us?</h3>
      <div>
        <img src={apple} alt="Company-logo" />
        <img src={samsung} alt="Company-logo" />
        <img src={xiaomi} alt="Company-logo" />
      </div>
    </div>
  );
};

export default Support;
