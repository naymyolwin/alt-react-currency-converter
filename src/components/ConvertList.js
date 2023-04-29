import React, { Component } from "react";
import ConvertTable from "../common/ConvertTable";

class ConvertList extends Component {
  render() {
    const result =
      this.props.rate === ""
        ? false
        : this.props.amount === ""
        ? false
        : this.props.fromCurrency === ""
        ? false
        : this.props.toCurrency === ""
        ? false
        : this.props.converted === false
        ? false
        : true;
    return (
      <>
        <div
          className={`w-full mt-96 md:mt-40 container mx-auto flex flex-col md:flex-row gap-4 md:gap-2 ${
            result ? "" : "hidden"
          }`}
        >
          <ConvertTable
            list={this.props.list}
            toCurrency={this.props.toCurrency}
            fromCurrency={this.props.fromCurrency}
            rate={this.props.forwardRate}
          />
          <ConvertTable
            list={this.props.list}
            toCurrency={this.props.fromCurrency}
            fromCurrency={this.props.toCurrency}
            rate={this.props.reverseRate}
          />
        </div>
      </>
    );
  }
}

export default ConvertList;
