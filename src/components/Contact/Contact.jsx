import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>Contact Us</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoree.
              </p>
            </div>
            <div
              class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 contact-form wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <form action="#" method="post">
                <input type="text" class="form-control" placeholder="Name" />
                <input type="email" class="form-control" placeholder="Email" />
                <textarea
                  class="form-control"
                  placeholder="Message"
                  rows="6"
                ></textarea>
                <input type="submit" class="form-control" value="SEND EMAIL" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
