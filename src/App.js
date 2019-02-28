import React, { Component } from "react";
import seinfeld from "./seinfeld.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={seinfeld} alt="seinfeld_img" />
      </div>
    );
  }
}

export default App;
