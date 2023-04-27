import React, { Component } from "react";

class DropdownBtn extends Component {
  render() {
    const list = this.props.list;
    return (
      <div className="mx-1 w-full">
        <select
          className="w-full h-10 p-2.5 text-gray-500 bg-white rounded-lg shadow-lg focus:outline-none outline-none appearance-none focus:border-ccOrange"
          value={this.props.fromCurrency}
          name={this.props.name}
          onChange={this.props.onChangeCurrency}
        >
          {list.map((item) => {
            return (
              <option className="text-ccOrange" key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default DropdownBtn;
