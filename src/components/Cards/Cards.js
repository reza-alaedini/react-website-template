import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";
import iphone12 from "../../images/iphone12.jpg";
import s10 from "../../images/S10.jpg";
import A30s from "../../images/A30s.jpg";
import s22 from "../../images/S22.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: iphone12, name: "iphone 12", cost: "500 $" },
        { id: 2, image: s10, name: "Galaxy S10", cost: "350 $" },
        { id: 3, image: A30s, name: "Galaxy A30s", cost: "150 $" },
        { id: 4, image: s22, name: "Galaxy S22", cost: "550 $" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={iphone12} name="iphone 12" cost="500 $" />
        <Card image={s10} name="Galaxy S10" cost="350 $" />
        <Card image={A30s} name="Galaxy A30s" cost="150 $" />
        <Card image={s22} name="Galaxy S22" cost="550 $" /> */}
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            cost={phone.cost}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
