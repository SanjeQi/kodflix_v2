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
            <div className="image-cover-row-item-overlay">
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div className="image-cover-row-item">
            <img src={got} alt="got" />
            <div className="image-cover-row-item-overlay">
              <h1>Games of Thrones</h1>
            </div>
          </div>
          <div className="image-cover-row-item">
            <img src={bad} alt="bad" />
            <div className="image-cover-row-item-overlay">
              <h1>Breaking Bad</h1>
            </div>
          </div>
        </div>

        <div className="image-cover-row">
          <div className="image-cover-row-item">
            <img src={kill} alt="kill" />
            <div className="image-cover-row-item-overlay">
              <h1>Generation Kill</h1>
            </div>
          </div>
          <div className="image-cover-row-item">
            <img src={sein} alt="sein" />
            <div className="image-cover-row-item-overlay">
              <h1>Seinfeld</h1>
            </div>
          </div>
          <div className="image-cover-row-item">
            <img src={wire} alt="wire" />
            <div className="image-cover-row-item-overlay">
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
