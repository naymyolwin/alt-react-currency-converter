import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

class SwapBtn extends Component {
  render() {
    return (
      <div>
        <button
          className="w-10 h-10 mx-1 rounded-full bg-ccGray border-2 hover:border-ccOrange duration-200 group"
          onClick={this.props.onSwap}
        >
          <FontAwesomeIcon
            className="text-ccOrange"
            icon={faArrowRightArrowLeft}
          />
        </button>
      </div>
    );
  }
}

export default SwapBtn;
