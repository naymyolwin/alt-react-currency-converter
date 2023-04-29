import React, { Component } from "react";

class ConvertBtn extends Component {
  render() {
    const result =
      this.props.amount === "" ||
      this.props.fromCurrency === "" ||
      this.props.toCurrency === ""
        ? false
        : true;
    return (
      <div
        className={`px-5 py-3 bg-ccOrange text-center rounded-lg text-ccGray w-32 md:w-full max-w-xs md:self-end cursor-pointer border-2 border-ccOrange shadow-lg hover:bg-ccGray hover:text-ccOrange ${
          result ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={this.props.onConvert}
      >
        Convert
      </div>
    );
  }
}

export default ConvertBtn;
