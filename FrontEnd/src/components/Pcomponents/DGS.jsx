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
      'Notebook',
    ];
    document.getElementById('charWeapon1').value = 'Revolver-D8';

    document.getElementById('charIntimidation').value = 1;
  } else if (value === 'Reporter') {
    document.getElementById('charAttack').value = 8;
    document.getElementById('charDefense').value = 10;
    document.getElementById('charInvestigation').value = 3;
    document.getElementById('charPersuasion').value = 2;
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
        <div className="row3">
          <button className="download-btn2" onClick={rollD20}>
            <img src={d20} alt="d20 dice" />
          </button>
          <p className="card4">← Don't have a dice? Roll For Health</p>
        </div>
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
                  <input type="text" id="charName" name="charName" required />
                  <label htmlFor="charClass">Class</label>
                  <input id="charClass"></input>
                </div>
                <div className="line2">
                  <label htmlFor="charHP">HP</label>
                  <input type="number" id="charHP" name="charHP" required />

                  <label htmlFor="charXP">XP</label>
                  <input type="number" id="charXP" name="charXP" />
                </div>
                <div className="line3">
                  <label htmlFor="charLuck">Luck</label>
                  <input type="number" id="charLuck" name="charLuck" />
                  <label htmlFor="charClueToken">Clue Tokens</label>
                  <input
                    type="number"
                    id="charClueToken"
                    name="charClueToken"
                  />{' '}
                  /4
                </div>
                <div className="line4">
                  <label htmlFor="charAttack">Attack</label>
                  <input type="number" id="charAttack" name="charAttack" />
                  <label htmlFor="charDefense">Defense</label>
                  <input type="number" id="charDefense" name="charDefense" />
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
                <input type="number" id="charDollars" name="charDollars" />
                <label htmlFor="charCents">Cents</label>
                <input type="number" id="charCents" name="charCents" />
              </div>

              <div className="bar2">
                <p>Weapons</p>
                <label htmlFor="charWeapon1">Weapon 1</label>
                <textarea type="text" id="charWeapon1" name="charWeapon1" />
                <label htmlFor="charWeapon2">Weapon 2</label>
                <textarea type="text" id="charWeapon2" name="charWeapon2" />
              </div>

              <div className="bar3">
                <p>Skills</p>
                <div className="row3">
                  <label htmlFor="charAthletics">Athletics</label>
                  <input type="number" id="charAthletics" />
                  <label htmlFor="charDeception">Deception</label>
                  <input type="number" id="charDeception" />
                  <label htmlFor="charDiplomacy">Diplomacy</label>
                  <input type="number" id="charDiplomacy" />
                  <label htmlFor="charDriving">Driving</label>
                  <input type="number" id="charDriving" />
                </div>
                <div className="row3">
                  <label htmlFor="charIntimidation">Intimidation</label>
                  <input type="number" id="charIntimidation" />
                  <label htmlFor="charInvestigation">Investigation</label>
                  <input type="number" id="charInvestigation" />
                  <label htmlFor="charMedical">Medical</label>
                  <input type="number" id="charMedical" />
                  <label htmlFor="charPerception">Perception</label>
                  <input type="number" id="charPerception" />
                </div>
                <div className="row3">
                  <label htmlFor="charPerformance">Performance</label>
                  <input type="number" id="charPerformance" />
                  <label htmlFor="charPersuasion">Persuasion</label>
                  <input type="number" id="charPersuasion" />
                  <label htmlFor="charSeduction">Seduction</label>
                  <input type="number" id="charSeduction" />
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
      </div>
    </>
  );
};

export default DGS;
