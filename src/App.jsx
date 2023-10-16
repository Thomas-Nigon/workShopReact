import "./App.css";
import ViteCard from "./Components/viteCard";
import CardTnig from "./Components/CardTnig";
import CardFtic from "./Components/CardFtic";
import CardPa from "./Components/CardPa";

function App() {
  const thomas = [
    {
      name: "Thomas",
      pic: "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
      description: "Description: Maitre clickeur",
      btnText: "Click me !!",
      state: ["count"],
    },
  ];
  const fred = [
    {
      name: "Fred",
      pic: "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
      description: "Si on le titille il s'enerve, Fred pas ch$$$ ! ",
      btnText: " AARGHRHHGH",
    },
  ];
  const pa = [
    {
      name: "PA",
      pidddc:
        "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
      description: "On n'a PA su lequel choisir!",
      paPics: [
        "https://www.stickees.com/files/cartoon/the-simpsons/2240-bart-simpson-skate.png",
        "https://www.stickees.com/files/cartoon/the-simpsons/2241-bart-simpson-scare.png",
        "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
      ],
      btnText: "Je change en cliquant",
    },
  ];

  return (
    <>
      <ViteCard />
      <main className="cardContainer">
        {thomas.map((element) => (
          <CardTnig
            key={element.name}
            name={element.name}
            pic={element.pic}
            description={element.description}
            btnText={element.btnText}
          />
        ))}
        {pa.map((element) => (
          <CardPa
            key={element.name}
            name={element.name}
            pic={element.pic}
            description={element.description}
            btnText={element.btnText}
            paPics={element.paPics}
          />
        ))}
        {fred.map((element) => (
          <CardFtic
            key={element.name}
            name={element.name}
            pic={element.pic}
            description={element.description}
            btnText={element.btnText}
          />
        ))}
      </main>
    </>
  );
}

export default App;
