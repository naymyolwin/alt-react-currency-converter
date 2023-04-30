import React, { Component } from "react";
import Amount from "../common/Amount";
import DropdownBtn from "../common/Dropdown";
import SwapBtn from "../common/SwapBtn";
import ConvertList from "./ConvertList";

import ConvertBtn from "../common/ConvertBtn";

class Convert extends Component {
  render() {
    const result = this.props.rate === "" ? false : true;
    return (
      <>
        <div
          className={`relative bg-ccGray w-full h-[500px] md:h-[450px] mb-[360px] md:mb-60`}
        >
          <div
            className={`pt-32 px-20 text-center text-ccOrange font-bold text-xl md:text-2xl`}
          >
            {result
              ? this.props.rate
              : "Trusted Global Currency Exchange & Money Transfer Solutions"}
          </div>
          <div className="container absolute top-64 inset-x-0 flex flex-col xl:px-60 items-center mx-auto px-16 py-24 gap-20 bg-ccTeal rounded-lg shadow-lg">
            <div className="w-full flex flex-col md:flex-row items-center gap-5">
              <Amount
                amount={this.props.amount}
                onChangeAmount={this.props.onChangeAmount}
              />
              <DropdownBtn
                list={this.props.list}
                currency={this.props.list[this.props.fromCurrency]}
                onChangeCurrency={this.props.onChangeCurrency}
                name="fromCurrency"
              />
              <SwapBtn
                fromCurrency={this.props.fromCurrency}
                toCurrency={this.props.toCurrency}
                onSwap={this.props.onSwap}
              />
              <DropdownBtn
                list={this.props.list}
                currency={this.props.list[this.props.toCurrency]}
                onChangeCurrency={this.props.onChangeCurrency}
                name="toCurrency"
              />
            </div>

            <ConvertBtn
              onConvert={this.props.onConvert}
              fromCurrency={this.props.fromCurrency}
              toCurrency={this.props.toCurrency}
              amount={this.props.amount}
            />
          </div>
        </div>
        <ConvertList
          amount={this.props.amount}
          list={this.props.list}
          toCurrency={this.props.toCurrency}
          fromCurrency={this.props.fromCurrency}
          rate={this.props.rate}
          forwardRate={this.props.forwardRate}
          reverseRate={this.props.reverseRate}
          converted={this.props.converted}
          historyData={this.props.historyData}
        />
      </>
    );
  }
}

export default Convert;
