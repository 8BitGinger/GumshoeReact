import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from './document-logo-sepia2.png';
import './playerPage.css';
import PenroseHeader from '../penroseHeader';
import d20 from '../../assets/images/d20.png';

function rollD20() {
  const roll = Math.floor(Math.random() * 20) + 1;
  document.getElementById('charHP').value = roll;
}

function runChar(value) {
  document.getElementById('charSheet').reset();

  console.log(value);
  if (value === 'Detective') {
    document.getElementById('charAttack').value = 10;
    document.getElementById('charDefense').value = 8;
    document.getElementById('charInvestigation').value = 2;
    document.getElementById('charPerception').value = 3;
    document.getElementById('charClass').value = 'Private Eye';
    document.getElementById('charItems').value = [
      'Magnifying Glass',
      ' Notebook',
    ];
    document.getElementById('charWeapon1').value = 'Revolver-D8';

    document.getElementById('charIntimidation').value = 1;
  } else if (value === 'Reporter') {
    document.getElementById('charAttack').value = 8;
    document.getElementById('charDefense').value = 10;
    document.getElementById('charInvestigation').value = 3;
    document.getElementById('charPersuasion').value = 2;
    document.getElementById('charClass').value = 'Reporter';
    document.getElementById('charItems').value = ['Notepad', 'Press Pass'];
    document.getElementById('charWeapon1').value = 'Utility Knife-D6';
  } else if (value === 'Musician') {
    document.getElementById('charAttack').value = 6;
    document.getElementById('charDefense').value = 12;
    document.getElementById('charPersuasion').value = 3;
    document.getElementById('charPerformance').value = 3;
    document.getElementById('charClass').value = 'Musician';
    document.getElementById('charItems').value = [
      'Instrument',
      ' Psychedelic Mushrooms',
    ];
    document.getElementById('charWeapon1').value = 'Knife-D6';
  } else if (value === 'Gangster') {
    document.getElementById('charAttack').value = 12;
    document.getElementById('charDefense').value = 6;
    document.getElementById('charDeception').value = 3;
    document.getElementById('charIntimidation').value = 2;
    document.getElementById('charPersuasion').value = 1;

    document.getElementById('charClass').value = 'Gangster';
    document.getElementById('charItems').value = [
      'Jug of Shine',
      ' Playing Cards',
    ];
    document.getElementById('charWeapon1').value = 'Tommy Gun-3D6';
  } else if (value === 'Politician') {
    document.getElementById('charAttack').value = 4;
    document.getElementById('charDefense').value = 20;
    document.getElementById('charDeception').value = 3;
    document.getElementById('charPersuasion').value = 2;
    document.getElementById('charPersuasion').value = 1;

    document.getElementById('charClass').value = 'Politician';
    document.getElementById('charItems').value = [
      'Poker Chip - $25',
      ' Tahlagio Room Key',
      ' Suit',
    ];
    document.getElementById('charWeapon1').value = 'Tommy Gun-3D6';
  } else if (value === 'Photographer') {
    document.getElementById('charAttack').value = 6;
    document.getElementById('charDefense').value = 12;
    document.getElementById('charPerception').value = 1;
    document.getElementById('charInvestigation').value = 1;
    document.getElementById('charPerformance').value = 2;

    document.getElementById('charClass').value = 'Photographer';
    document.getElementById('charItems').value = ['Camera', ' Flashlight'];
    document.getElementById('charWeapon1').value = 'Knife-D6';
  } else if (value === 'Dancer') {
    document.getElementById('charAttack').value = 8;
    document.getElementById('charDefense').value = 10;
    document.getElementById('charPerformance').value = 2;
    document.getElementById('charSeduction').value = 3;
    document.getElementById('charPersuasion').value = 1;

    document.getElementById('charClass').value = 'Burlesque Dancer';
    document.getElementById('charItems').value = ['Feather Boa', ' Opium'];
    document.getElementById('charWeapon1').value = 'Poison-2D6';
  } else if (value === 'Dealer') {
    document.getElementById('charAttack').value = 10;
    document.getElementById('charDefense').value = 8;
    document.getElementById('charDeception').value = 3;
    document.getElementById('charPerformance').value = 3;

    document.getElementById('charClass').value = 'Card Dealer';
    document.getElementById('charItems').value = [
      'Playing Cards',
      ' Loaded Dice',
    ];
    document.getElementById('charWeapon1').value = 'Knife-D6';
  } else if (value === 'Cab') {
    document.getElementById('charAttack').value = 8;
    document.getElementById('charDefense').value = 10;
    document.getElementById('charDriving').value = 3;
    document.getElementById('charPersuasion').value = 2;
    document.getElementById('charInvestigation').value = 1;
    document.getElementById('charDriving').value = 1;
    document.getElementById('charClass').value = 'Cab Driver';
    document.getElementById('charItems').value = ['Cab', ' Map'];
    document.getElementById('charWeapon1').value = 'Bat-D8';
  }
}

const DGS = () => {
  const [loader, setLoader] = useState(false);
  const [myValue, setMyValue] = useState('Start Here!');

  console.log(myValue);

  const downloadPDF = () => {
    const capture = document.querySelector('.charMain');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'pt', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);

      setLoader(false);
      doc.save('character-sheet.pdf');
    });
  };

  return (
    <>
      <div className="container" id="dgs">
        <h1>
          <PenroseHeader />
          Digital Character Builder
        </h1>
        <h2>Using the D.C.S.</h2>

        <article className="col2 dcs">
          <p>
            The Digital Character Sheet (D.C.S.) is a an easy tool designed to
            create a character in just minutes!
          </p>
          <ol>
            <li>
              First Select a Class from the dropdown menu to auto-fill the
              Basics from the Chosen Class.
            </li>
            <span className="underline">Next Fill Out the empty Fields:</span>
            <li>Character Name - Choose a Name</li>
            <li>
              HP - Roll a D20 for Health{' '}
              <span className="subText">(or use the D20 button below!)</span>
            </li>
            <li>XP, Luck, Clue Tokens - These Start at Zero</li>
            <li>
              Items, Starting Weapon, and Class Skills will auto-populate upon
              Class Selection.
            </li>
            <li>
              Traits - This is completely optional, but can be used to add a
              little more depth to your character.
            </li>
            <li>
              Money - Work with your Story Teller to determine the right fit for
              the narrative
            </li>
            <li>
              Skills - These are already filled in with the bonus&apos; from
              your Class. You have an additional 7 to add to any skills you
              choose, with a maximum of 5 in each.
            </li>
          </ol>
        </article>

        <section className="card5">
          <form id="charSheet" className="character-sheet">
            <select
              id="classSelect"
              onChange={(e) => {
                setMyValue(e.target.value);
                runChar(e.target.value);
              }}
              defaultValue={myValue}
            >
              <option value="choose">Start Here!</option>
              <option value="Detective">Private Eye</option>
              <option value="Reporter">Reporter</option>
              <option value="Musician">Musician</option>
              <option value="Gangster">Gangster</option>
              <option value="Politician">Politician</option>
              <option value="Photographer">Photographer</option>
              <option value="Dancer">Burlesque Dancer</option>
              <option value="Dealer">Card Dealer</option>
              <option value="Cab">Cab Driver</option>
            </select>
            <div className="charMain">
              <img src={logo} alt="gumshoe logo" />
              <div className="charTop">
                <div className="line1">
                  <label htmlFor="charName">Character Name</label>
                  <input
                    type="text"
                    id="charName"
                    name="charName"
                    required={true}
                  />
                  <label htmlFor="charClass">Class</label>
                  <input id="charClass"></input>
                </div>
                <div className="line2">
                  <label htmlFor="charHP">HP</label>
                  <input
                    type="number"
                    id="charHP"
                    name="charHP"
                    min="0"
                    max="35"
                    required={true}
                  />

                  <label htmlFor="charXP">XP</label>
                  <input type="number" id="charXP" min="0" name="charXP" />
                </div>
                <div className="line3">
                  <label htmlFor="charLuck">Luck</label>
                  <input type="number" min="0" id="charLuck" name="charLuck" />
                  <label htmlFor="charClueToken">Clue Tokens</label>
                  <input
                    type="number"
                    id="charClueToken"
                    min="0"
                    max="4"
                    name="charClueToken"
                  />{' '}
                  /4
                </div>
                <div className="line4">
                  <label htmlFor="charAttack">Attack</label>
                  <input
                    type="number"
                    id="charAttack"
                    name="charAttack"
                    min="4"
                    max="20"
                    required={true}
                  />
                  <label htmlFor="charDefense">Defense</label>
                  <input
                    type="number"
                    id="charDefense"
                    min="4"
                    max="20"
                    required={true}
                    name="charDefense"
                  />
                </div>
              </div>

              <div className="bar1">
                <label htmlFor="charItems">Items</label>
                <textarea type="text" id="charItems" name="charItems" />

                <label htmlFor="charTraits">Traits</label>
                <textarea type="text" id="charTraits" name="charTraits" />
              </div>

              <div className="bar2">
                <label htmlFor="charDollars">Dollars</label>
                <input
                  type="number"
                  id="charDollars"
                  min="0"
                  name="charDollars"
                />
                <label htmlFor="charCents">Cents</label>
                <input type="number" id="charCents" name="charCents" min="0" />
              </div>

              <div className="bar2">
                <label htmlFor="charWeapon1">Weapon 1</label>
                <textarea type="text" id="charWeapon1" name="charWeapon1" />
                <label htmlFor="charWeapon2">Weapon 2</label>
                <textarea type="text" id="charWeapon2" name="charWeapon2" />
              </div>

              <div className="bar3">
                <p>Skills</p>
                <div className="row3">
                  <label htmlFor="charAthletics">Athletics</label>
                  <input type="number" min="0" max="5" id="charAthletics" />
                  <label htmlFor="charDeception">Deception</label>
                  <input type="number" min="0" max="5" id="charDeception" />
                  <label htmlFor="charDiplomacy">Diplomacy</label>
                  <input type="number" min="0" max="5" id="charDiplomacy" />
                  <label htmlFor="charDriving">Driving</label>
                  <input type="number" min="0" max="5" id="charDriving" />
                </div>
                <div className="row3">
                  <label htmlFor="charIntimidation">Intimidation</label>
                  <input type="number" min="0" max="5" id="charIntimidation" />
                  <label htmlFor="charInvestigation">Investigation</label>
                  <input type="number" min="0" max="5" id="charInvestigation" />
                  <label htmlFor="charMedical">Medical</label>
                  <input type="number" min="0" max="5" id="charMedical" />
                  <label htmlFor="charPerception">Perception</label>
                  <input type="number" min="0" max="5" id="charPerception" />
                </div>
                <div className="row3">
                  <label htmlFor="charPerformance">Performance</label>
                  <input type="number" min="0" max="5" id="charPerformance" />
                  <label htmlFor="charPersuasion">Persuasion</label>
                  <input type="number" min="0" max="5" id="charPersuasion" />
                  <label htmlFor="charSeduction">Seduction</label>
                  <input type="number" min="0" max="5" id="charSeduction" />
                </div>
              </div>
            </div>
          </form>

          {loader ? (
            <button type="button" className="download-btn" disabled={true}>
              Loading...
            </button>
          ) : (
            <button
              type="button"
              onClick={downloadPDF}
              className="download-btn"
              disabled={!(loader === false)}
            >
              Download PDF
            </button>
          )}
        </section>
        <div className="row6">
          <button className="download-btn2" onClick={rollD20}>
            <img src={d20} alt="d20 dice" />
          </button>
          <p className="card6">← Don&apos;t have a dice? Roll For Health</p>
        </div>
      </div>
    </>
  );
};

export default DGS;
