import { useState } from "react";
import "./Card.scss";

function Card({ name, pic, description, btnText }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="card" id={name}>
        <h1 id="titleFred">{name}</h1>
        <img src={pic} alt="" className={isActive ? "isActive" : "notActive"} />
        <p>{description}</p>
        <button onClick={handleClick}>{btnText}</button>
      </div>
    </>
  );
}

export default Card;
