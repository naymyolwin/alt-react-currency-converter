import React, { Component } from "react";

class Hamburger extends Component {
  render() {
    return (
      <div className="relative flex flex-col md:hidden ">
        <span className=" hamburger-top w-10 h-1 bg-ccGray" />
        <span className="hamburger-middle my-2 w-10 h-1 bg-ccGray" />
        <span className="hamburger-bottom w-10 h-1 bg-ccGray" />
      </div>
    );
  }
}

export default Hamburger;
