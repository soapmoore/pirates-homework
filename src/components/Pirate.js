import React from "react";
import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

export function Pirate(props) {
  return (
    <section>
      <summary>
        <img src={avatar} alt="pirate" />
        <h3>{props.pirate.name}</h3>
        <ul>
          <li>Died: {props.pirate.year}</li>
          <li>Weapon: {props.pirate.weapon}</li>
          <li>Vessel: {props.pirate.vessel}</li>
        </ul>
      </summary>
      <article>
        <h2>{props.tagline}</h2>
        <p>{props.pirate.description}</p>
      </article>
    </section>
  );
}

export default Pirate;
