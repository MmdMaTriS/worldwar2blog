import React from "react";
import { Link } from "react-router-dom";

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
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
              <span class="icon icon-bar"></span>
            </button>
            <p class="navbar-brand">Ulrich Waffen</p>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <p>HOME</p>
                </Link>
              </li>
              <li>
                <Link to="/wars">
                  <p>Wars</p>
                </Link>
              </li>
              <li>
                <Link to="/generals">
                  <p>Generals</p>
                </Link>
              </li>
              <li>
                <Link to="/countries">
                  <p>Countries</p>
                </Link>
              </li>
              <li>
                <Link to="/allies">
                  <p>Allies</p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
