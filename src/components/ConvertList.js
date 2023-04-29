import React, { Component } from "react";
import ConvertTable from "../common/ConvertTable";

class ConvertList extends Component {
  render() {
    const result = this.props.rate === "" ? false : true;
    return (
      <>
        <div
          className={`relative w-full container mx-auto flex flex-col md:flex-row -mt-48 md:-mt-96 mb-10 gap-4 md:gap-2 ${
            result ? "block" : "hidden"
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
