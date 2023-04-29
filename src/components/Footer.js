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
      <>
        <div className="w-full h-40 bg-ccDark text-ccGray">
          <div className="container flex flex-col md:flex-row-reverse items-center mx-auto justify-around md:justify-between h-full">
            <div className="flex gap-5 mx-10">
              <a
                href="https://www.linkedin.com/in/naymyolwin/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-8 h-8 hover:text-ccOrange duration-200 cursor-pointer"
                  onClick={socialClick}
                  id="linkedin"
                />
              </a>
              <a
                href="https://github.com/naymyolwin"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-8 h-8 hover:text-ccOrange duration-200 cursor-pointer"
                  id="github"
                />
              </a>
            </div>

            <div
              className="flex items-center mx-10"
              onClick={socialClick}
              id="email"
            >
              <FontAwesomeIcon
                icon={faCopyright}
                className="w-7 h-7 pr-2 text-ccOrange"
              />
              naymyolwin@gmail.com
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
