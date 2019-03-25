import React from "react";
import "./Gallery.css";
import Cover from "./cover/Cover";
import getShows from "../shows";

class Gallery extends React.Component {
  componentDidMount() {
    fetch("rest/shows")
      .then(res => res.json())
      .then(data => console.log(`Fetched from  backend`, data));
  }

  render() {
    return (
      <div className="gallery">
        {getShows().map(show => {
          return (
            <Cover
              image={show.image}
              key={show.id}
              id={show.id}
              title={show.title}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
