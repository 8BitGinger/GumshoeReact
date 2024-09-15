import React from 'react';
import gear from '../assets/images/gear.png';
import charSheet from '../assets/downloads/NeonCity-CharSheet.pdf';
import starterAdventure from '../assets/downloads/NeonCity-StarterAdventure.pdf';

const DownloadBook = () => {
  return (
    <p className="col skew">
      <img className="avatar3" src={gear} alt="1930s gear" />

      <a href={charSheet} download>
        ✓ Character Sheet
      </a>

      <a href={starterAdventure} download>
        ✓ Starter Adventure
      </a>
    </p>
  );
};

export default DownloadBook;
