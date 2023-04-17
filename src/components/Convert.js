import React, { Component } from "react";
import Amount from "../common/Amount";
import Dropdown from "../common/Dropdown";
import SwapBtn from "../common/SwapBtn";

import ConvertBtn from "../common/ConvertBtn";

class Convert extends Component {
  render() {
    return (
      <div className=" bg-ccGray w-full h-80 md:h-60  ">
        <div className="container relative top-32 flex flex-col xl:px-60 items-center mx-auto px-16 py-8 gap-10 bg-ccTeal rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <Amount />
            <Dropdown />
            <SwapBtn />
            <Dropdown />
          </div>

          <ConvertBtn />
        </div>
      </div>
    );
  }
}

export default Convert;
