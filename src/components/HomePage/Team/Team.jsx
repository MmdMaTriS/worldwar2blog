import React from "react";

const Team = () => {
  return (
    <>
      <section id="team">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>Our team</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoree.
              </p>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-6 wow fadeIn"
              data-wow-delay="0.9s"
            >
              <img
                src="images/team1.jpg"
                class="img-responsive"
                alt="team img"
              />
              <div class="team-des">
                <h4>Tracy</h4>
                <h3>Designer</h3>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-6 wow fadeIn"
              data-wow-delay="0.9s"
            >
              <img
                src="images/team2.jpg"
                class="img-responsive"
                alt="team img"
              />
              <div class="team-des">
                <h4>Linda</h4>
                <h3>Manager</h3>
              </div>
            </div>
            <div
              class="col-md-4 col-sm-4 col-xs-6 wow fadeIn"
              data-wow-delay="0.9s"
            >
              <img
                src="images/team3.jpg"
                class="img-responsive"
                alt="team img"
              />
              <div class="team-des">
                <h4>Mary</h4>
                <h3>Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
