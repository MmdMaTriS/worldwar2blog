import React from "react";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/HomePage/Team/Team";
import Work from "../../components/HomePage/Work/Work";
import Portfolio from "../../components/HomePage/Portfolio/Portfolio";
import HomeIntroduce from "../../components/Introduce/HomeIntroduce/HomeIntroduce";
import Price from "../../components/HomePage/Price/Price";
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
