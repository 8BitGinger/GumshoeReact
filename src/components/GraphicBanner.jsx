import React from 'react';

const GraphicBanner = () => {
  return (
    <section className="graphics">
      <div className="container-photo">
        <img src="src/assets/images/clues.jpg" alt="clues" />
        <h3>Search for Clues in Neon City</h3>
      </div>
      <div className="container-photo">
        <img src="src/assets/images/gangsters.jpg" alt="clues" />
        <h3>Dodge Gangsters and Crooked Cops</h3>
      </div>

      <div className="container-photo">
        <img src="src/assets/images/mystery.jpg" alt="clues" />
        <h3>Solve a mystery that&apos;s out of this world!</h3>
      </div>
    </section>
  );
};

export default GraphicBanner;
