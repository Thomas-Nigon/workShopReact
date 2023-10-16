import { useState } from "react";
import "./Card.scss";

function Card({ name, pic, description, btnText }) {
  const [click, setState] = useState(0);
  return (
    <>
      <div className="card" id={name}>
        <h1>{name}</h1>
        <img src={pic} alt="" />
        <p>{description}</p>
        <button onClick={() => setState((click) => click + 1)}>
          {btnText} {click}
        </button>
      </div>
    </>
  );
}

export default Card;
