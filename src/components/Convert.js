import React, { Component } from "react";
import Amount from "../common/Amount";
import DropdownBtn from "../common/Dropdown";
import SwapBtn from "../common/SwapBtn";
import ConvertList from "./ConvertList";

import ConvertBtn from "../common/ConvertBtn";

class Convert extends Component {
  render() {
    return (
      <>
        <div className="bg-ccGray w-full h-80 md:h-60  ">
          <div className="container relative top-32 flex flex-col xl:px-60 items-center mx-auto px-16 py-8 gap-10 bg-ccTeal rounded-lg shadow-lg">
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
        <ConvertList />
      </>
    );
  }
}

export default Convert;
