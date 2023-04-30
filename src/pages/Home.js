import React, { Component } from "react";
import Convert from "../components/Convert";
import Recommanded from "../components/Recommanded";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currencyList: {},
      amount: "",
      fromCurrency: "USD",
      toCurrency: "EUR",
      rate: "",
      forwardRate: "",
      reverseRate: "",
      converted: false,
      historyData: {},
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
    this.setState({
      converted: true,
    });
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

    fetch(
      `https://${host}/latest?amount=1&from=${this.state.fromCurrency}&to=${this.state.toCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          forwardRate: data.rates[this.state.toCurrency],
        });
      });

    fetch(
      `https://${host}/latest?amount=1&from=${this.state.toCurrency}&to=${this.state.fromCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          reverseRate: data.rates[this.state.fromCurrency],
        });
      });
    const date = new Date();
    date.setDate(date.getDate() - 90);
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });

    const formattedDate = year + "-" + month + "-" + day;

    fetch(
      `https://${host}/${formattedDate}..?from=${this.state.fromCurrency}&&to=${this.state.toCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          historyData: data,
        });
      });
  };

  onSwap = () => {
    const from = this.state.fromCurrency;
    const to = this.state.toCurrency;
    this.setState({
      fromCurrency: to,
      toCurrency: from,
      converted: false,
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
          forwardRate={this.state.forwardRate}
          reverseRate={this.state.reverseRate}
          converted={this.state.converted}
          historyData={this.state.historyData}
        />
        <Recommanded />
      </div>
    );
  }
}

export default Home;
