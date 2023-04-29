import React, { Component } from "react";
import { Link } from "react-router-dom";

class SendButton extends Component {
  render() {
    return (
      <Link
        to="/contact"
        className="hidden md:flex justify-center items-center px-5 py-3 bg-ccOrange rounded-md text-ccGray cursor-pointer border-2 border-ccOrange hover:bg-ccGray hover:text-ccOrange duration-200"
      >
        Send
      </Link>
    );
  }
}

export default SendButton;
