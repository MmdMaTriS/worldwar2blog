import React from "react";
// import videoBg from "../../../images/BgVideo.mp4";
const Header = () => {
  function playAudio() {
    let audio = document.getElementById("myaudio");
    audio.volume = 0.3;
    audio.play();
  }
  return (
    <>
      <section id="home">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <h2 class="wow bounceInDown rotate">Historical</h2>
              <h1 class="wow bounce">World War 2</h1>
              <a
                href="#intro"
                class="btn btn-default smoothScroll"
                onClick={playAudio}
              >
                GET START!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
