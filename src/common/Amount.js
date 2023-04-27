import React, { Component } from "react";

class Amount extends Component {
  render() {
    return (
      <div className="mx-1 w-full">
        <input
          placeholder="Amount"
          type="text"
          className="w-full h-10 border-2 bg-white text-gray-500 rounded-lg px-5 shadow-lg focus:border-ccOrange focus:outline-none"
          value={this.props.amount}
          onChange={this.props.onChangeAmount}
        />
      </div>
    );
  }
}

export default Amount;
<input type="text" />;
