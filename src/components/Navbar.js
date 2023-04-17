import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../common/Hamburger";
import Button from "../common/Button";

class Navbar extends Component {
  render() {
    return (
      <div className="h-20 w-full bg-ccDark">
        <div className="container flex w-full h-full justify-between items-center mx-auto">
          <FontAwesomeIcon
            className="h-10 w-10 mx-10 text-ccGray cursor-pointer hover:text-ccOrange duration-200"
            icon={faHouse}
          />

          <div className="mx-10">
            <Hamburger />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
