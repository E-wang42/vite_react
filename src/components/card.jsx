import data from "../data/data";
import React from "react";
import "./card.css";

function Card({ question, answer }) {
  const answers = data.a;
  const questions = data.q;

  return (
    <div className="card">
      <figure className="card__container">
        <p className="card__container--content">{question}</p>
        <p className="card__container--content">{answer}</p>
      </figure>
    </div>
  );
}

export default Card;
