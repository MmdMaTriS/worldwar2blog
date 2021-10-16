import React from "react";
import { Route, Switch } from "react-router";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Header />
        </Route>
      </Switch>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
