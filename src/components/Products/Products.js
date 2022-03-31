import React, { Component } from "react";
import axios from "axios";

import styles from "./Products.module.css";
import Card from "../Cards/Card";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) =>
        this.setState({
          products: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { products } = this.state;
    return (
      <div className={styles.container}>
        {products.length ? (
          products.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.title}
              cost={`${product.price} $`}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
        {/* {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.title}
            cost={`${product.price} $`}
          />
        ))} */}
      </div>
    );
  }
}
