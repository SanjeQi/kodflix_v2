import React from "react";
import "./Cover.css";
import { Link } from "react-router-dom";

export default class Cover extends React.Component {
  render() {
    return (
      <Link to="/details" className="cover">
        <img src={this.props.image} alt="" />
        <div className="cover-overlay">
          <h1>{this.props.title}</h1>
        </div>
      </Link>
    );
  }
}
