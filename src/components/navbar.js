import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../common/Hamburger";

class Navbar extends Component {
  render() {
    return (
      <div className="flex justify-between items-center px-10 h-20 w-full bg-ccDark">
        <FontAwesomeIcon className="h-10 w-10 text-ccGray" icon={faHouse} />
        <Hamburger />
      </div>
    );
  }
}

export default Navbar;
