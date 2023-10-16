import "./App.css";
import ViteCard from "./Components/viteCard";
import Card from "./Components/Card";
function App() {
  const team = [
    {
      name: "Thomas",
      pic: "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png",
      description: "Description: Maitre clickeur",
      btnText: "Click me !!",
      state: ["count"],
    },
    {
      name: "Fred",
      pic: "https://www.stickees.com/files/cartoon/the-simpsons/2249-homer-simpson-the-incredible-homer.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis veritatis saepe sunt excepturi earum.",
      state: ["testFred"],
    },
    {
      name: "PA",
      pic: "https://www.stickees.com/files/cartoon/the-simpsons/2244-bart-simpson-nirvana-nevermind.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia doloremque earum esse, nobis molestias?",
      paPics: ["salut", "coucou", "ola"],
    },
  ];

  return (
    <>
      <ViteCard />
      <main className="cardContainer">
        {team.map((element) => (
          <Card
            key={element.name}
            name={element.name}
            pic={element.pic}
            description={element.description}
            btnText={element.btnText}
            state={element.state}
            paPics={element.paPics}
          />
        ))}
      </main>
    </>
  );
}

export default App;
