import React from 'react';
import clues from '../assets/images/clues.jpg';
import gangsters from '../assets/images/gangsters.jpg';
import mystery from '../assets/images/mystery.jpg';

const GraphicBanner = () => {
  return (
    <section className="graphics">
      <div className="container-photo">
        <img src={clues} alt="man at desk being handed evidence" />
        <h3>Search for Clues in Neon City</h3>
      </div>
      <div className="container-photo">
        <img src={gangsters} alt="crooked cop sitting with gangster" />
        <h3>Dodge Gangsters and Crooked Cops</h3>
      </div>

      <div className="container-photo">
        <img src={mystery} alt="alien in fedora" />
        <h3>Solve a mystery that&apos;s out of this world!</h3>
      </div>
    </section>
  );
};

export default GraphicBanner;
