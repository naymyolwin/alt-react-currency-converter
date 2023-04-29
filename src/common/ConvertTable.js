import React, { Component } from "react";

class ConvertTable extends Component {
  render() {
    const arr = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000];
    const arrList = arr.map((item) => {
      let result = (item * this.props.rate).toFixed(2);
      return result;
    });

    return (
      <div id="main" className="w-full">
        <div
          id="upper"
          className="bg-ccOrange p-5 rounded-t-xl text-center text-white"
        >
          {`${this.props.list[this.props.fromCurrency]} to ${
            this.props.list[this.props.toCurrency]
          }`}
          <div className="flex justify-around mt-10">
            <div className="w-100 text-center">{this.props.fromCurrency}</div>
            <div className="w-100 text-center">{this.props.toCurrency}</div>
          </div>
        </div>
        {/* ===== */}
        <div id="lower" className=" bg-ccGray rounded-b-xl p-5 h-auto">
          {arr.map((item, index) => {
            return (
              <div key={item} className="flex justify-around">
                <div id="left" className="w-full text-center text-ccOrange">
                  {item} {this.props.fromCurrency}
                </div>
                <div id="right" className="w-full text-center text-ccDark">
                  {arrList[index]} {this.props.toCurrency}
                </div>
              </div>
            );
          })}
          {/* <div id="left" className="w-full text-center text-ccOrange">
            1 USD
          </div>
          <div id="right" className="w-full text-center text-ccDark">
            1 GBP
          </div> */}
        </div>
      </div>
    );
  }
}

export default ConvertTable;
