import React from 'react';
import logoImage from '../assets/images/document-logo-sepia2.png';

const Intro = () => {
  return (
    <section id="intro" className="container intro">
      <h1 className="starter">
        <img className="gumshoe" src={logoImage} alt="logo" />

        <br />
        <br />
        <span className="bring-forward">Neon City </span>

        <span className="date">☆☆☆ June 6, 1936 ☆☆☆</span>
      </h1>
    </section>
  );
};

export default Intro;
