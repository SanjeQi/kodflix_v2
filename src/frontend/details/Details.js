import React from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";
import Loading from "../common/loading/Loading";

export default class Details extends React.Component {
  constructor() {
    super();
    this.state = { show: {} };
  }

  componentDidMount() {
    let showId = this.props.match.params.showId;
    fetch(`/rest/shows/${showId}`)
      .then(res => res.json())
      .then(show => this.setState({ show }));
  }

  render() {
    let show = this.state.show;
    if (show) {
      return show.id ? <DetailsContent show={show} /> : <Loading />;
    } else {
      return <Redirect to="/not-found" />;
    }
  }
}

function DetailsContent({ show }) {
  return (
    <div className="details">
      <h1>{show.title}</h1>
      <div className="details-content">
        <h3 className="details-content-synopsis">{show.synopsis}</h3>
        <div className="details-content-cover">
          <img
            src={require(`../common/images/${show.id}.jpg`)}
            alt={show.title}
          />
        </div>
      </div>
    </div>
  );
}
