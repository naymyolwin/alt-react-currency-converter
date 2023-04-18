import React, { Component } from "react";
import Convert from "../components/Convert";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currencyList: [],
    };
  }

  componentDidMount() {
    fetch("https://api.frankfurter.app/latest").then((response) => {
      response.json().then((list) => {
        this.setState(() => {
          return { currencyList: Object.keys(list.rates) };
        });
      });
    });
  }
  render() {
    return (
      <div>
        <Convert list={this.state.currencyList} />
      </div>
    );
  }
}

export default Home;
