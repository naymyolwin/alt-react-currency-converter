import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    return (
      <div className="mx-1">
        <input
          type="text"
          className="w-full h-10 border-2 px-5 rounded-lg focus:outline-none focus:border-ccOrange"
        />
      </div>
    );
  }
}

export default Dropdown;
