import React, { Component } from "react";
import Convert from "../components/Convert";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currencyList: {},
      amount: "",
      fromCurrency: "",
      toCurrency: "",
      rate: "",
    };
  }

  getKeyByValue = (obj, val) => {
    return Object.keys(obj).find((key) => obj[key] === val);
  };

  onChangeCurrency = (e) => {
    this.setState({
      [e.target.name]: this.getKeyByValue(
        this.state.currencyList,
        e.target.value
      ),
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
        this.setState({
          rate: `${this.state.amount} ${this.state.fromCurrency} = ${
            data.rates[this.state.toCurrency]
          } ${this.state.toCurrency}`,
        });
      });
  };

  onSwap = () => {
    const from = this.state.fromCurrency;
    const to = this.state.toCurrency;
    this.setState({
      fromCurrency: to,
      toCurrency: from,
    });
  };

  componentDidMount() {
    fetch("https://api.frankfurter.app/currencies").then((response) => {
      response.json().then((list) => {
        this.setState({
          currencyList: list,
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
          onSwap={this.onSwap}
          rate={this.state.rate}
        />
      </div>
    );
  }
}

export default Home;
