import React from "react";
import gif from "../../../images/gif1.gif";
import gifimg from "../../../images/gif1.jpg";

import gif2 from "../../../images/gif2.gif";
import gifimg2 from "../../../images/gif2.jpg";

import gif3 from "../../../images/gif3.gif";
import gifimg3 from "../../../images/gif3.jpg";

import gif4 from "../../../images/gif4.gif";
import gifimg4 from "../../../images/gif4.jpg";
const Work = () => {
  return (
    <>
      <section id="work">
        <div class="container">
          <div class="row ">
            <div class="col-md-4 col-sm-4 title battlecards">
              <h2>نبردها</h2>
              <hr />
              <p>
                در جنگ جهانی دوم عملیات های و نبرد های بسیار مهم و سرنوشت سازی
                صورت گرفت در این بخش میتوانید در مورد چندین نبرد از مهمترین نبرد
                های جنگ جهانی دوم مطالعه کنید
              </p>
            </div>
            <div class="col-md-8 col-sm-8">
              <div class="col-md-6 col-sm-6 bg-red p-0 gif-cont ">
                <a href="/">
                  <figure>
                    <img class="static" src={gifimg} />
                    <img class="active" src={gif} />
                  </figure>
                  <div></div>
                  <span>Hello</span>
                </a>
              </div>
              <div class="col-md-6 col-sm-6 bg-black gif-cont ">
                <a href="/">
                  <figure>
                    <img class="static" src={gifimg2} />
                    <img class="active" src={gif2} />
                  </figure>
                  <div></div>
                  <span>Hello</span>
                </a>
              </div>
              <div class="col-md-6 col-sm-6 bg-black gif-cont ">
                <a href="/">
                  <figure>
                    <img class="static" src={gifimg3} />
                    <img class="active" src={gif3} />
                  </figure>
                  <div></div>
                  <span>Hello</span>
                </a>
              </div>
              <div class="col-md-6 col-sm-6 bg-red gif-cont ">
                <a href="/">
                  <figure>
                    <img class="static" src={gifimg4} />
                    <img class="active" src={gif4} />
                  </figure>
                  <div></div>
                  <span>Hello</span>
                </a>
              </div>
              {/* <div class="col-md-6 col-sm-6 bg-red">
                <i class="fa fa-globe"></i>
                <h3>SEO</h3>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Work;
