import React from "react";

const Navbar = () => {
  return (
    <>
      <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              {" "}
              <span class="icon icon-bar"></span>{" "}
              <span class="icon icon-bar"></span>{" "}
              <span class="icon icon-bar"></span>{" "}
            </button>
            <a href="#" class="navbar-brand">
              Impulse
            </a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#home" class="smoothScroll">
                  HOME
                </a>
              </li>
              <li>
                <a href="#intro" class="smoothScroll">
                  INTRO
                </a>
              </li>
              <li>
                <a href="#work" class="smoothScroll">
                  WORK
                </a>
              </li>
              <li>
                <a href="#team" class="smoothScroll">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#portfolio" class="smoothScroll">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#price" class="smoothScroll">
                  PRICE
                </a>
              </li>
              <li>
                <a href="#contact" class="smoothScroll">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
