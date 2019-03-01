import React, { Component } from "react";
// import seinfeld from "./covers/seinfeld.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-cover-row">
          <div className="image-cover-row-item">
            <h1>Black Mirror</h1>
          </div>
          <div className="image-cover-row-item">
            <h1>Breaking Bad</h1>
          </div>
          <div className="image-cover-row-item">
            <h1>Seinfeld</h1>
          </div>
        </div>

        <div className="image-cover-row">
          <div className="image-cover-row-item">
            <h1>Games of Thrones</h1>
          </div>
          <div className="image-cover-row-item">
            <h1>Generation Kill</h1>
          </div>
          <div className="image-cover-row-item">
            <h1>The Wire</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
