import React, { Component } from "react";

class Hamburger extends Component {
  render() {
    return (
      <div className="relative flex flex-col md:hidden group cursor-pointer">
        <span className=" hamburger-top w-10 h-1 bg-ccGray group-hover:bg-ccOrange" />
        <span className="hamburger-middle my-2 w-10 h-1 bg-ccGray group-hover:bg-ccOrange" />
        <span className="hamburger-bottom w-10 h-1 bg-ccGray group-hover:bg-ccOrange" />
      </div>
    );
  }
}

export default Hamburger;
