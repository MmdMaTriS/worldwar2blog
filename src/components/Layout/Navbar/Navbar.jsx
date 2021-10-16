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
            <p class="navbar-brand">Ulrich Waffen</p>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <p>HOME</p>
              </li>

              <li>
                <p>Wars</p>
              </li>
              <li>
                <p>Generals</p>
              </li>
              <li>
                <p>Countries</p>
              </li>
              <li>
                <p>Allies</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
