import React from "react";

const Work = () => {
  return (
    <>
      <section id="work">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 title">
              <h2>Service</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                aliquam erat volutpat.
              </p>
            </div>
            <div class="col-md-8 col-sm-8">
              <div class="col-md-6 col-sm-6 bg-black">
                <i class="fa fa-mobile"></i>
                <h3>Mobile UX</h3>
              </div>
              <div class="col-md-6 col-sm-6 bg-red">
                <i class="fa fa-cloud"></i>
                <h3>Social media</h3>
              </div>
              <div class="col-md-6 col-sm-6 bg-red">
                <i class="fa fa-link"></i>
                <h3>Web Design</h3>
              </div>
              <div class="col-md-6 col-sm-6 bg-black">
                <i class="fa fa-globe"></i>
                <h3>SEO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
