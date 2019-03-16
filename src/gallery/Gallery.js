import React from "react";

import Cover from "./cover/Cover";
import "./Gallery.css";
import getGallery from "./gallery-get.js";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        {getGallery().map(cover => {
          return (
            <Cover
              image={cover.image}
              key={cover.id}
              id={cover.id}
              title={cover.title_text}
            />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
