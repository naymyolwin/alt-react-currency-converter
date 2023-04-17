import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="hidden md:flex justify-center items-center px-5 py-3 bg-ccOrange rounded-md text-ccGray cursor-pointer border-2 border-ccOrange hover:bg-ccGray hover:text-ccOrange duration-200">
        Contact Us
      </div>
    );
  }
}

export default Button;
