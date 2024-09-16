import React, { useState } from 'react';
import PenroseHeader from '../components/penroseHeader';
import test from '../assets/images/test.png';

const testUser = {
  name: 'Billy Bob',
};

let dollars = 12;
let cents = 33;

const char1 = {
  name: 'Ryan 1',
  class: 'Class 1',
  hp: 'HP 1',
  xp: 'XP 1',
  luck: 'Luck 1',
  clueTokens: 'Clue Tokens 1',
  attack: 'Attack 1',
  defense: 'Defense 1',
  items: ['Item 1', 'Item 2', 'Item 3'],
  traits: ['Trait 1', 'Trait 2', 'Trait 3'],
  money: [dollars, cents],
  weapons: ['Weapon 1', 'Weapon 2', 'Weapon 3'],

  athletics: 1,
  deception: 2,
  diplomacy: 3,
  driving: 4,
  forgery: 5,
  intimidation: 6,
  investigation: 7,
  medical: 8,
  perception: 9,
  performance: 10,
  persuasion: 11,
  seduction: 12,

  date: 'Date 1',
};

const char2 = {
  name: 'Adrian 2',
  class: 'Class 2',
  hp: 'HP 2',
  xp: 'XP 2',
  luck: 'Luck 2',
  clueTokens: 'Clue Tokens 2',
  attack: 'Attack 2',
  defense: 'Defense 2',
  items: ['Item 1', 'Item 2', 'Item 3'],
  money: [dollars, cents],
  weapons: ['Weapon 1', 'Weapon 2', 'Weapon 3'],
  athletics: 1,
  deception: 2,
  diplomacy: 3,
  driving: 4,
  forgery: 5,
  intimidation: 6,
  investigation: 7,
  medical: 8,
  perception: 9,
  performance: 10,
  persuasion: 11,
  seduction: 12,
  traits: ['Trait 1', 'Trait 2', 'Trait 3'],
  date: 'Date 2',
};

const char3 = {
  name: 'Sherrie 3',
  class: 'Class 3',
  hp: 'HP 3',
  xp: 'XP 3',
  luck: 'Luck 3',
  clueTokens: 'Clue Tokens 3',
  attack: 'Attack 3',
  defense: 'Defense 3',
  items: ['Item 1', 'Item 2', 'Item 3'],

  athletics: 1,
  deception: 2,
  diplomacy: 3,
  driving: 4,
  forgery: 5,
  intimidation: 6,
  investigation: 7,
  medical: 8,
  perception: 9,
  performance: 10,
  persuasion: 11,
  seduction: 12,

  date: 'Date 3',
  traits: ['Trait 1', 'Trait 2', 'Trait 3'],
  money: [dollars, cents],
  weapons: ['Weapon 1', 'Weapon 2', 'Weapon 3'],
};

const Dashboard = () => {
  const [activeChar, setActiveChar] = useState(null);

  const showCharacter = (character) => {
    // Pass the character object directly
    setActiveChar(character);
    console.log('Active character:', character);
  };

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1>
          <PenroseHeader />
          {testUser.name}&apos;s Dashboard
        </h1>

        <section className="dash-container">
          <div className="dash-block">
            <div className="empty">
              {/* left side */}
              <button className="bio-btn" onClick={() => showCharacter(char1)}>
                <img src={test} alt="test" />
                <div className="dash-bio">
                  <h4>{char1.name}</h4>
                  <h5>{char1.date}</h5>
                </div>
              </button>
              <button className="bio-btn" onClick={() => showCharacter(char2)}>
                <img src={test} alt="test" />
                <div className="dash-bio">
                  <h4>{char2.name}</h4>
                  <h5>{char2.date}</h5>
                </div>
              </button>
              <button className="bio-btn" onClick={() => showCharacter(char3)}>
                <img src={test} alt="test" />
                <div className="dash-bio">
                  <h4>{char3.name}</h4>
                  <h5>{char3.date}</h5>
                </div>
              </button>
            </div>
            <div className="page-break">{/* DO NOT USE */}</div>
            <div className="blank-page">
              {/* right side */}
              <div id="showbio">
                <h4 id="charName">{activeChar?.name}</h4>{' '}
                {/* Use optional chaining */}
                <h5 id="charClass">{activeChar?.class}</h5>
                <h5 id="charLvl">{activeChar?.hp}</h5>
                <h5 id="charBack">{activeChar?.xp}</h5>
              </div>
            </div>
          </div>
          <div className="tab">{/* folder tab */}</div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
