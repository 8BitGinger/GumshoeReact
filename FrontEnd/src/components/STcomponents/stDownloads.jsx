import React from 'react';
import gear from '../../assets/images/gear.png';
import NeonCityCharSheet from '../../assets/downloads/NeonCity-CharSheet.pdf';
import NeonCityStarterAdventure from '../../assets/downloads/NeonCity-StarterAdventure.pdf';

const stDownloads = () => {
  return (
    <div className="spacer" id="top">
      <section id="intro" className="container intro">
        <h3 id="downloads">Downloads</h3>
        <p className="twin"></p>
        <div className="card5 skew">
          <span className="col">
            <img className="avatar3" src={gear} alt="1930s gear" />

            <a href={NeonCityCharSheet} download>
              ✓ Character Sheet
            </a>

            <a href={NeonCityStarterAdventure} download>
              ✓ Starter Adventure
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default stDownloads;
