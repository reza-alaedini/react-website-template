import React, { Component } from "react";

import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Search from "../Search/Search";
import Support from "../Support/Support";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Cards />
        <Search />
        <Support />
      </div>
    );
  }
}
