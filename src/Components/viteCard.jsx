import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function ViteCard() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}
export default ViteCard;
