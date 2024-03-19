import React from 'react';
import Dice from '../components/Pcomponents/dice';
import Classes from '../components/Pcomponents/classes';
import CheatSheet from '../components/Pcomponents/cheatSheet';
import CharSheetBreak from '../components/Pcomponents/charSheetBreak';
import Downloads from '../components//Pcomponents/downloads';
import Footer from '../components/footer';
import DGS from '../components/Pcomponents/DGS';
import PenroseHeader from '../components/penroseHeader';
import partnersPic from '../assets/images/partners.jpg';
import backstoryPic from '../assets/images/backstory.jpg';

const Player = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay spacer" id="top">
      <section id="intro" className="container intro">
        <h1>
          <PenroseHeader />
          Player Page
        </h1>

        <article className="column avatar">
          <img
            className="avatar5"
            src={partnersPic}
            alt="man and woman staring at each other"
          />
          <p>
            Gumshoe is a detective game set in a neon-noir city. The game is
            designed to be played by friends cooperatively as a TTRPG. In order
            to fully immerse yourself in the world of Gumshoe, we first need to
            create a character for you to play. This character will be the your
            avatar in the game, and will be used to interact with the world and
            other characters. Your character will need a name, a backstory, and
            a class that provides a set of skills and items that will help them
            solve the case.
          </p>
        </article>

        <article className="column avatar">
          <p>
            The backstory will help you understand the character&apos;s
            motivations and goals. It will also help you understand the
            character&apos;s place in the world, and how they fit into the story
            of the game. Work with your Story Teller to come up with a backstory
            that works with within his Adventure and the world of Gumshoe.
          </p>
          <img
            className="avatar5"
            src={backstoryPic}
            alt="man standing with fedora"
          />
        </article>

        <Classes />
        <Dice />
        <CheatSheet />
        <CharSheetBreak />

        <DGS />
        <Downloads />

        <Footer />
      </section>
    </div>
  );
};

export default Player;
