import React from "react";
import { Route, Switch } from "react-router";
import Layout from "./components/Layout/Layout";
import Allies from "./pages/Allies/Allies";
import Home from "./pages/Home/Home";
import Countries from "./pages/Countries/Countries";
import Generals from "./pages/Generals/Generals";
import Wars from "./pages/Wars/Wars";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/allies">
          <Allies />
        </Route>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route path="/generals">
          <Generals />
        </Route>
        <Route path="/wars">
          <Wars />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
