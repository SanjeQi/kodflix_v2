import React, { Component } from "react";
import bad from "./covers/bad.jpg";
import black from "./covers/black.jpg";
import got from "./covers/got.jpg";
import kill from "./covers/kill.jpg";
import sein from "./covers/sein.jpg";
import wire from "./covers/wire.jpg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-cover-row">
          <div className="image-cover-row-item">
            <img src={black} alt="black" />
          </div>
          <div className="image-cover-row-item">
            <img src={got} alt="got" />
          </div>
          <div className="image-cover-row-item">
            <img src={bad} alt="bad" />
          </div>
        </div>

        <div className="image-cover-row">
          <div className="image-cover-row-item">
            <img src={kill} alt="kill" />
          </div>
          <div className="image-cover-row-item">
            <img src={sein} alt="sein" />
          </div>
          <div className="image-cover-row-item">
            <img src={wire} alt="wire" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
