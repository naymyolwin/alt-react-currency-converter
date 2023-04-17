import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Convert from "../components/Convert";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Convert />
      </div>
    );
  }
}

export default Home;
