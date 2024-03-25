import { useState } from 'react';

import d4 from '../assets/images/d4.png';
import d6 from '../assets/images/d6.png';
import d8 from '../assets/images/d8.png';
import d10 from '../assets/images/d10.png';
import d12 from '../assets/images/d12.png';
import d20 from '../assets/images/d20.png';
import percentiles from '../assets/images/percentiles.png';
import PenroseHeader from '../components/penroseHeader';

function rollDice(value) {
  const result = Math.floor(Math.random() * value + 1);
  console.log(result);
  document.getElementById('diceRes').value = result;
  document.getElementById('resultText').innerHTML = 'D' + value + ' Result:';
}

const DiceRoller = () => {
  const [myValue, setMyValue] = useState('Start Here!');

  return (
    <div className="overlay" id="top">
      <section id="dice" className="container page">
        <h1>
          <PenroseHeader />
          Online Dice Roller
        </h1>
        <div className="card3">
          <h2 id="resultText">Dice Result:</h2>
          <textarea disabled id="diceRes"></textarea>
        </div>
        <div>
          <div className="card2 dice2">
            <button
              className="box3"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(4);
              }}
            >
              <h4>D4</h4>
              <img src={d4} alt="d4 dice" />
            </button>
            <button
              className="box3"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(6);
              }}
            >
              <h4>D6</h4>
              <img src={d6} alt="d6 dice" />
            </button>
            <button
              className="box3"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(8);
              }}
            >
              <h4>D8</h4>
              <img src={d8} alt="d8 dice" />
            </button>
            <button
              className="box3"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(10);
              }}
            >
              <h4>D10</h4>
              <img src={d10} alt="d10 dice" />
            </button>
            <button
              className="box3"
              name="4"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(12);
              }}
            >
              <h4>D12</h4>
              <img src={d12} alt="d12 dice" />
            </button>
            <button
              className="box3"
              name="4"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(20);
              }}
            >
              <h4>D20</h4>
              <img src={d20} alt="d20 dice" />
            </button>
            <button
              className="box3"
              name="4"
              onClick={(e) => {
                setMyValue(e.target.value);
                rollDice(100);
              }}
            >
              <h4>Percent</h4>
              <img src={percentiles} alt="d100 dice" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiceRoller;
