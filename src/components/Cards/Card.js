import React, { Component } from "react";

import styles from "./Card.module.css";
import up from "../../images/up.svg";
import down from "../../images/down.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="product-pic" />
        <h3>{name}</h3>
        <p>
          {cost}{" "}
          {counter ? ` * ${counter} = ${cost.split(" ")[0] * counter} $` : ""}
        </p>

        <div className={styles.counter}>
          <img
            className={!counter ? styles.deactive : ""}
            src={down}
            alt="down-arrow"
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img src={up} alt="up-arrow" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
