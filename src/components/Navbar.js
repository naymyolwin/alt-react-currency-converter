import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../common/Hamburger";
import ContactButton from "../common/ContactButton";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="h-40 w-full bg-ccDark">
        <div className="container flex w-full h-full justify-between items-center mx-auto">
          <Link to="/">
            <FontAwesomeIcon
              className="h-10 w-10 mx-10 text-ccGray cursor-pointer hover:text-ccOrange duration-200"
              icon={faHouse}
            />
          </Link>

          <div className="mx-10">
            <Hamburger />
            <ContactButton />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
