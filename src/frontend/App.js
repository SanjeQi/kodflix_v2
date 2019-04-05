import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Gallery from "./gallery/Gallery";
import Details from "./details/Details";
import NotFound from "./not-found/NotFound";
import Menu from "./common/menu/Menu";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/:showId" component={Details} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
