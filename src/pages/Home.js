import React, { Component } from "react";
import Convert from "../components/Convert";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currencyList: [],
      amount: "",
      fromCurrency: "",
      toCurrency: "",
    };
  }

  onChangeCurrency = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onChangeAmount = (e) => {
    this.setState(
      {
        amount: e.target.value,
      },
      () => {
        console.log(this.state.amount);
      }
    );
  };

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
        <Convert
          list={this.state.currencyList}
          amount={this.state.amount}
          fromCurrency={this.state.fromCurrency}
          toCurrency={this.state.toCurrency}
          onChangeAmount={this.onChangeAmount}
          onChangeCurrency={this.onChangeCurrency}
        />
      </div>
    );
  }
}

export default Home;
