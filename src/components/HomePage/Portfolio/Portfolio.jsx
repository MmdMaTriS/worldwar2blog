import React, { useState, useEffect } from "react";
import contentful from "../../../Helpers/contentful";
const Portfolio = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    contentful
      .getEntries({
        content_type: "side",
      })
      .then((result) => setData(result.items));
  }, []);
  const allies = data?.filter((data) => data.fields.sidename === "متفقین");
  const axis = data?.filter((data) => data.fields.sidename === "متحدین");
  console.log(allies, axis);
  return (
    <>
      <div id="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8 title">
              <h2>طرفین حاضر</h2>
              <hr />
              <p>
                در این بخش چند کشور از قدر های بزرگ جنگ جهانی دوم را معرفی
                میکنیم
              </p>
            </div>

            <div class="col-md-12 col-sm-12"></div>
            <p className="col-md-12">متحدین</p>
            {axis?.map((data) => {
              return (
                <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
                  <a
                    href="images/portfolio-img1.jpg"
                    data-lightbox-gallery="portfolio-gallery"
                  >
                    <img
                      src={"images/portfolio-img1.jpg"}
                      alt="portfolio img"
                    />
                  </a>
                </div>
              );
            })}
            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img1.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img1.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img2.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img2.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img3.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img3.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img4.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img4.jpg" alt="portfolio img" />
              </a>
            </div>
            <p className="col-md-12">متفقین</p>
            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img5.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img5.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img6.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img6.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img7.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img7.jpg" alt="portfolio img" />
              </a>
            </div>

            <div class="col-md-3 col-sm-3 wow fadeIn" data-wow-delay="0.6s">
              <a
                href="images/portfolio-img8.jpg"
                data-lightbox-gallery="portfolio-gallery"
              >
                <img src="images/portfolio-img8.jpg" alt="portfolio img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
