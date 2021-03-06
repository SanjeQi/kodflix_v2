import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ReactGA from "react-ga";

import Gallery from "./gallery/Gallery";
import Details from "./details/Details";
import NotFound from "./not-found/NotFound";
import Menu from "./common/menu/Menu";
import ManageTvShows from "./manage-tv-shows/ManageTvShows";
import Play from "./play/Play";
import AdminShows from "../frontend/adminshows/AdminShows.js";

import "./App.css";

class App extends Component {
  constructor({ history, location }) {
    super();
    ReactGA.initialize("UA-121194998-1");
    this.trackPageView(location);
    history.listen(location => this.trackPageView(location));
  }

  trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route path="/manage/tv-shows" component={ManageTvShows} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/:showId/play" component={Play} />
          <Route path="/:showId" component={Details} />
          <Route path="/admin/tv-shows" component={AdminShows} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
