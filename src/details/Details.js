import React from "react";
import { Redirect } from "react-router-dom";
import getShows from "../shows";
import "./Details.css";

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
    return this.state.show ? (
      <div className="details">
        <h1>{this.state.show.title}</h1>
        <div className="details-content">
          <h3 className="details-content-synopsis">
            {this.state.show.synopsis}
          </h3>
          <div className="detail-content-cover">
            <img src={this.state.show.image} />
          </div>
        </div>
      </div>
    ) : (
      <Redirect to="/not-found" />
    );
  }
}

export default Details;
