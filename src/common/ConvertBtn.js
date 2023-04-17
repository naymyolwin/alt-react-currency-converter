import React, { Component } from "react";

class ConvertBtn extends Component {
  render() {
    return (
      <div className="px-5 py-3 bg-ccOrange text-center rounded-md text-ccGray w-32 md:w-full max-w-xs md:self-end cursor-pointer border-2 border-ccOrange hover:bg-ccGray hover:text-ccOrange">
        Convert
      </div>
    );
  }
}

export default ConvertBtn;
