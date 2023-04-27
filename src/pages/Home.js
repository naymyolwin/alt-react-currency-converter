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
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  onConvert = () => {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${this.state.amount}&from=${this.state.fromCurrency}&to=${this.state.toCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.rates[this.state.toCurrency]);
      });
  };

  componentDidMount() {
    fetch("https://api.frankfurter.app/currencies").then((response) => {
      response.json().then((list) => {
        this.setState(() => {
          return { currencyList: Object.keys(list) };
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
          onConvert={this.onConvert}
        />
      </div>
    );
  }
}

export default Home;
