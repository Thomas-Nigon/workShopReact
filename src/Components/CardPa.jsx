import { useState } from "react";
import "./Card.scss";

function Card({ name, pic, description, btnText, paPics }) {
  const [click, setState] = useState(0);
  console.log("click:", click);
  return (
    <>
      <div className="card" id={name}>
        <h1>{name}</h1>
        <img src={paPics[click]} alt="" />
        <p>{description}</p>
        <button onClick={() => setState((click) => click + 1)}>
          {click === 3 ? setState((click) => (click = 0)) : null}
          {btnText}
        </button>
      </div>
    </>
  );
}

export default Card;
