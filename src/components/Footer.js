import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    const socialClick = (e) => {
      console.log(e.currentTarget.id);
    };
    return (
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-ccDark text-ccGray">
        <div className="container flex flex-col md:flex-row-reverse items-center mx-auto justify-around md:justify-between h-full">
          <div className="flex gap-5 mx-10">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-8 h-8 hover:text-ccOrange duration-200 cursor-pointer"
              onClick={socialClick}
              id="linkedin"
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="w-8 h-8 hover:text-ccOrange duration-200 cursor-pointer"
              onClick={socialClick}
              id="github"
            />
          </div>

          <div
            className="flex items-center group cursor-pointer mx-10"
            onClick={socialClick}
            id="email"
          >
            <FontAwesomeIcon
              icon={faCopyright}
              className="w-5 h-5 pr-2 group-hover:text-ccOrange duration-200"
            />
            naymyolwin@gmail.com
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
