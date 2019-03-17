import React from "react";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      welcomeMessage:
        "Hello, this is the detail page for each TV Show. Under construction . Please return at a later date"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        welcomeMessage: "The best is yet to come. Under construction"
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to="/">Go Back to HomePage</Link>
      </div>
    );
  }
}

export default Details;
