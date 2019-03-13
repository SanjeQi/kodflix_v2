import React, { Component } from "react";
import Cover from "./cover/Cover";
import black from "./cover/images/black.jpg";
import got from "./cover/images/got.jpg";
import bad from "./cover/images/bad.jpg";
import kill from "./cover/images/kill.jpg";
import sein from "./cover/images/sein.jpg";
import wire from "./cover/images/wire.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-cover-row">
          <Cover image={black} title={"Black Mirror"} />
          <Cover image={got} title={"Games of Thrones"} />
          <Cover image={bad} title={"Breaking Bad"} />
        </div>

        <div className="image-cover-row">
          <Cover image={kill} title={"Generation Kill"} />
          <Cover image={sein} title={"Seinfeld"} />
          <Cover image={wire} title={"The Wire"} />
        </div>
      </div>
    );
  }
}

export default App;
