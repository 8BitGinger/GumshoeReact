import React from 'react';
import PenroseHeader from './penroseHeader';
import gear from '../assets/images/gear.png';
import charSheet from '../assets/downloads/NeonCity-CharSheet.pdf';
import starterAdventure from '../assets/downloads/NeonCity-StarterAdventure.pdf';

const Downloads = () => {
  return (
    <section className="container" id="downloads">
      <h1>
        <PenroseHeader />
        Downloads and Resources
      </h1>
      <article className="column">
        <p>
          Got a new pair of gumshoes for your next Neon City adventure? <br />
          <br />
          Welcome to a hidden alleyway chock full of essential gear. Here
          you&apos;ll find character sheets, crisp and clean, ready to be filled
          with the grit and grime of your player&apos;s persona. And a Starter
          Adventure to get you and your crew started on your first case. <br />
          <br />
          So, don&apos;t be a flatfoot, partner. Gear up, fuel the narrative
          firepower, and get ready to dive back into adventure and the neon
          abyss.
        </p>
        <p className="col skew">
          <img className="avatar3" src={gear} alt="1930s gear" />

          <a href={charSheet} download>
            ✓ Character Sheet
          </a>

          <a href={starterAdventure} download>
            ✓ Starter Adventure
          </a>
        </p>
      </article>
    </section>
  );
};

export default Downloads;
