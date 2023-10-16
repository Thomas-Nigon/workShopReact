import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Card.scss";

function ViteCard() {
  return (
    <>
      <div className="react">
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
    </>
  );
}
export default ViteCard;
