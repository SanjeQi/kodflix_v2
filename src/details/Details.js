import React from "react";
import { Link } from "react-router-dom";
import getShows from "../shows";
// import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      show: {}
    };
  }
  componentDidMount() {
    let show = getShows().find(
      show => show.id === this.props.match.params.showId
    );
    this.setState({ show });
  }

  render() {
    return (
      <div>
        <h1>{this.state.show.title}</h1>
        <Link to="/">Go Back to HomePage</Link>
      </div>
    );
  }
}

export default Details;
