import black from "./cover/images/black.jpg";
import got from "./cover/images/got.jpg";
import bad from "./cover/images/bad.jpg";
import kill from "./cover/images/kill.jpg";
import sein from "./cover/images/sein.jpg";
import wire from "./cover/images/wire.jpg";

function getGallery() {
  return [
    { id: "black", title_text: "Black Mirror", image: black },
    { id: "got", title_text: "Games of Thrones", image: got },
    { id: "bad", title_text: "Breaking Bad", image: bad },
    { id: "kill", title_text: "Generation Kill", image: kill },
    { id: "sein", title_text: "Seinfeld", image: sein },
    { id: "wire", title_text: "The Wire", image: wire }
  ];
}

export default getGallery;
