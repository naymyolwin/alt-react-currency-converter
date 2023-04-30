import React, { Component } from "react";
import { Link } from "react-router-dom";

class SendButton extends Component {
  render() {
    const result =
      this.props.name === ""
        ? false
        : this.props.email === ""
        ? false
        : this.props.phone === ""
        ? false
        : this.props.textarea === ""
        ? false
        : true;
    return (
      <div
        className={`flex justify-center  bg-ccOrange items-center px-5 py-3 rounded-md text-ccGray border-2 border-ccOrange hover:bg-ccGray hover:text-ccOrange duration-200 ${
          result ? "pointer-events-auto cursor-pointer" : "pointer-events-none"
        }`}
      >
        Send
      </div>
    );
  }
}

export default SendButton;
