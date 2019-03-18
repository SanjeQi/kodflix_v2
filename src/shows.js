import black from "./gallery/cover/images/black.jpg";
import got from "./gallery/cover/images/got.jpg";
import bad from "./gallery/cover/images/bad.jpg";
import kill from "./gallery/cover/images/kill.jpg";
import sein from "./gallery/cover/images/sein.jpg";
import wire from "./gallery/cover/images/wire.jpg";

function getShows() {
  return [
    { id: "black", title: "Black Mirror", image: black },
    { id: "got", title: "Games of Thrones", image: got },
    { id: "bad", title: "Breaking Bad", image: bad },
    { id: "kill", title: "Generation Kill", image: kill },
    { id: "sein", title: "Seinfeld", image: sein },
    { id: "wire", title: "The Wire", image: wire }
  ];
}

export default getShows;
