import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  changeHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <p>Search What You Want</p>
        <div>
          <input
            placeholder="Search..."
            value={this.state.text}
            onChange={this.changeHandler}
          />
          <br />
          <br />
          <p className={styles.searchP}>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default Search;
