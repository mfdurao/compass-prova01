import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { CurrentlyReading, WantRead, Reads, Search } from "../pages";

import { Header, GlobalStyle } from "../components";

const Routes = ({ getList, setList, getData }) => {
  return (
    <Router>
      <GlobalStyle />
      <Header getList={getList} />
      <Switch>
        <Route exact path="/">
          <CurrentlyReading getData={getData} />
        </Route>
        <Route path="/currently-reading">
          <CurrentlyReading getData={getData} />
        </Route>
        <Route path="/want-to-read">
          <WantRead getData={getData} />
        </Route>
        <Route path="/read">
          <Reads getData={getData} />
        </Route>
        <Route path="/search">
          <Search setList={setList} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
