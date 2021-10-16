import React from "react";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/Team/Team";
import Work from "../../components/Work/Work";
import Portfolio from "../../components/Portfolio/Portfolio";
import HomeIntroduce from "../../components/Introduce/HomeIntroduce/HomeIntroduce";
import Price from "../../components/Price/Price";
const Home = () => {
  return (
    <>
      <HomeIntroduce />
      <Work />
      <Team />
      <Portfolio />
      <Price />
      <Contact />
    </>
  );
};
export default Home;
