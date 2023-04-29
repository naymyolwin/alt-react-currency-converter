import React, { Component } from "react";

class ConvertTable extends Component {
  render() {
    return (
      <div id="main" className="w-full">
        <div
          id="upper"
          className="bg-ccOrange p-5 rounded-t-xl text-center text-white"
        >
          Convert US Dollars to British Pounds
          <div className="flex justify-around mt-10">
            <div className="w-100 text-center">USD</div>
            <div className="w-100 text-center">GBP</div>
          </div>
        </div>
        <div
          id="lower"
          className="flex justify-around bg-ccGray rounded-b-xl p-5 h-20"
        >
          <div id="left" className="w-full text-center text-ccOrange">
            1 USD
          </div>
          <div id="right" className="w-full text-center text-ccDark">
            1 GBP
          </div>
        </div>
      </div>
    );
  }
}

export default ConvertTable;
