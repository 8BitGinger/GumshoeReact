import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from './document-logo-sepia2.png';
import './playerPage.css';
import twinDame from '../../assets/images/twin-dame.png';
import PenroseHeader from '../penroseHeader';

const DGS = () => {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector('.character-sheet');
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);

      setLoader(false);
      doc.save('character-sheet.pdf');
    });
  };

  return (
    <div className="container">
      <h1>
        <PenroseHeader />
        Digital Character Builder
      </h1>
      <section className="charContainer">
        <div className="develop">
          <h3>Develop Your Character!</h3>
          <img src={twinDame} className="avatar5" alt="city sign" />
        </div>

        <form className="character-sheet">
          <div className="charMain">
            <img src={logo} alt="gumshoe logo" />
            <div className="charTop">
              <div className="line1">
                <label htmlFor="charName">Character Name</label>
                <input type="text" id="charName" name="charName" required />
                <label htmlFor="charClass">Class</label>
                <select>
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
              <div className="block1">
                <label htmlFor="charItems">Items</label>
                <textarea type="text" id="charItems" name="charItems" />
              </div>
              <div className="block1">
                <label htmlFor="charTraits">Traits</label>
                <textarea type="text" id="charTraits" name="charTraits" />
              </div>
              <div className="money block1">
                <label htmlFor="charDollars">Dollars</label>
                <input type="number" id="charDollars" name="charDollars" />
                <label htmlFor="charCents">Cents</label>
                <input type="number" id="charCents" name="charCents" />
              </div>
            </div>

            <div className="bar2">
              <p>Weapons</p>
              <label htmlFor="charWeapon1">Weapon 1</label>
              <textarea type="text" id="charWeapon1" name="charWeapon1" />
              <label htmlFor="charWeapon2">Weapon 2</label>
              <textarea type="text" id="charWeapon2" name="charWeapon2" />
            </div>
          </div>

          <aside className="bar3">
            <p>Skills</p>
            <label htmlFor="charAthletics">Athletics</label>
            <input type="number" id="charAthletics" />
            <label htmlFor="charDeception">Deception</label>
            <input type="number" id="charDeception" />
            <label htmlFor="charDiplomacy">Diplomacy</label>
            <input type="number" id="charDiplomacy" />
            <label htmlFor="charDriving">Driving</label>
            <input type="number" id="charDriving" />
            <label htmlFor="charIntimidation">Intimidation</label>
            <input type="number" id="charIntimidation" />
            <label htmlFor="charInvestigation">Investigation</label>
            <input type="number" id="charInvestigation" />
            <label htmlFor="charMedical">Medical</label>
            <input type="number" id="charMedical" />
            <label htmlFor="charPerception">Perception</label>
            <input type="number" id="charPerception" />
            <label htmlFor="charPerformance">Performance</label>
            <input type="number" id="charPerformance" />
            <label htmlFor="charPersuasion">Persuasion</label>
            <input type="number" id="charPersuasion" />
            <label htmlFor="charSeduction">Seduction</label>
            <input type="number" id="charSeduction" />
          </aside>
        </form>

        {loader ? (
          <span>Downloading</span>
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
  );
};

export default DGS;
