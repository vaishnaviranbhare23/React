import React from "react";
import "./Symptoms.css";
import Fever from "./images/fever.png";
import Cough from "./images/cough.png";
import Tired from "./images/tired.png";
import Ache from "./images/Ache.png";
import Throat from "./images/Throat.png";
import Diarrhoea from "./images/Diarrhoea.png";
import Conjunctivitis from "./images/Conjunctivitis.png";
import Headache from "./images/Headache.png";
import Taste from "./images/Taste.png";
import Rash from "./images/Rash.png";
import Chest from "./images/Chest.png";
import Breathing from "./images/Breathing.png";
import Speech from "./images/Speech.png";

import Card from "./Card";

function Symptoms() {
  return (
    <div className="symptoms m-4 px-5  ">
      <h1 className="my-1">Symptoms</h1>

      <div className="row g-4 symptoms__card mb-3">
        <h3 className="mt-5">
          <ul>
            <li>Most Common Symptoms</li>
          </ul>
        </h3>
        <Card img={Fever} color={"#6be1de"} info={"Fever"} />
        <Card img={Cough} color={"#f67943"} info={"Dry cough"} />
        <Card img={Tired} color={"#b886ff"} info={"Tiredness"} />
      </div>

      <div className="row g-4 symptoms__card mb-3">
        <h3 className="mt-5">
          <ul>
            <li>Least Common Symptoms</li>
          </ul>
        </h3>
        <Card img={Ache} color={"#C5ADFF"} info={"Aches and pains"} />
        <Card img={Throat} color={"#D1FBFF"} info={"Sore throat"} />
        <Card img={Diarrhoea} color={"#F5FFFF"} info={"Diarrhoea"} />
        <Card img={Conjunctivitis} color={"#FFD2D2"} info={"Conjunctivitis"} />
        <Card img={Headache} color={"#96B6B6"} info={"Headache"} />
        <Card img={Taste} color={"#A0FF8B"} info={"Loss of taste,smell"} />
        <Card img={Rash} color={"#FFECE5"} info={"Rash on skin"} />
      </div>

      <div className="row g-4 symptoms__card">
        <h3 className="mt-5">
          <ul>
            <li>Serious Symptoms</li>
          </ul>
        </h3>
        <Card
          img={Breathing}
          color={"#E8D8FF"}
          info={"Difficulty in breathing"}
        />
        <Card img={Chest} color={"#A6A6A6"} info={"Chest pain or pressure"} />
        <Card
          img={Speech}
          color={"#FFFE8A"}
          info={"Loss of speech or movement"}
        />
      </div>
    </div>
  );
}

export default Symptoms;
