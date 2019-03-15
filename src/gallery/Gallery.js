import React from "react";

import Cover from "./cover/Cover";
import "./Gallery.css";

import black from "./cover/images/black.jpg";
import got from "./cover/images/got.jpg";
import bad from "./cover/images/bad.jpg";
import kill from "./cover/images/kill.jpg";
import sein from "./cover/images/sein.jpg";
import wire from "./cover/images/wire.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        <Cover image={black} id="black" title={"Black Mirror"} />
        <Cover image={got} id="got" title={"Games of Thrones"} />
        <Cover image={bad} id="bad" title={"Breaking Bad"} />
        <Cover image={kill} id="kill" title={"Generation Kill"} />
        <Cover image={sein} id="sein" title={"Seinfeld"} />
        <Cover image={wire} id="wire" title={"The Wire"} />
      </div>
    );
  }
}

export default Gallery;
