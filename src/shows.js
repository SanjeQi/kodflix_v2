import black from "./gallery/cover/images/black.jpg";
import got from "./gallery/cover/images/got.jpg";
import bad from "./gallery/cover/images/bad.jpg";
import kill from "./gallery/cover/images/kill.jpg";
import sein from "./gallery/cover/images/sein.jpg";
import wire from "./gallery/cover/images/wire.jpg";

function getShows() {
  return [
    {
      id: "black",
      title: "Black Mirror",
      image: black,
      synopsis: `
            An anthology series exploring a twisted, high-tech world where 
            humanity's greatest innovations and darkest instincts collide.`
    },
    {
      id: "got",
      title: "Games of Thrones",
      image: got,
      synopsis: `
            Nine noble families fight for control over the mythical lands of 
            Westeros, while an ancient enemy returns after being dormant 
            for thousands of years.`
    },
    {
      id: "bad",
      title: "Breaking Bad",
      image: bad,
      synopsis: `
            A high school chemistry teacher diagnosed with inoperable 
            lung cancer turns to manufacturing and selling methamphetamine 
            in order to secure his family's future.`
    },
    {
      id: "kill",
      title: "Generation Kill",
      image: kill,
      synopsis: `
              A Rolling Stone reporter, embedded with The 1st Recon Marines 
              chronicles his experiences during the first wave of the American-led 
              assault on Baghdad in 2003`
    },
    {
      id: "sein",
      title: "Seinfeld",
      image: sein,
      synopsis: `
              The continuing misadventures of neurotic New York City 
              stand-up comedian Jerry Seinfeld and his equally neurotic 
              New York City friends.`
    },
    {
      id: "wire",
      title: "The Wire",
      image: wire,
      synopsis: `
              Baltimore drug scene, seen through the eyes of drug 
              dealers and law enforcement.`
    }
  ];
}

export default getShows;
