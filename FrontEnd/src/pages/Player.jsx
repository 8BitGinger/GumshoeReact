import React from 'react';
import Dice from '../components/Pcomponents/dice';
import Classes from '../components/Pcomponents/classes';
import CheatSheet from '../components/Pcomponents/cheatSheet';
import CharSheetBreak from '../components/Pcomponents/charSheetBreak';
import Downloads from '../components//Pcomponents/downloads';
import DCS from '../components/Pcomponents/DGS';
import PenroseHeader from '../components/penroseHeader';
import partnersPic from '../assets/images/partners.jpg';
import backstoryPic from '../assets/images/backstory.jpg';
import Back2Top from '../components/Back2Top';
import PlayerNav from '../components/Pcomponents/pNav';
import Skills from '../components/STcomponents/Skills';
import LeftCard from '../components/Reuseable/Home/LeftCard';
import RightCard from '../components/Reuseable/Home/RightCard';

const Player = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay spacer" id="top">
      <section id="intro" className="container intro">
        <PlayerNav />
        <h1>
          <PenroseHeader />
          Player Page
        </h1>

        <LeftCard
          image={partnersPic}
          imageAlt="Male and female partners"
          content="Gumshoe is a detective game set in a neon-noir city. The game is designed to be played by friends cooperatively as a TTRPG. In order to fully immerse yourself in the world of Gumshoe, we first need to create a character for you to play. This character will be the your avatar in the game, and will be used to interact with the world and other characters. Your character will need a name, a backstory, and a class that provides a set of skills and items that will help them solve the case."
        />

        <RightCard
          content="The backstory will help you understand the character's motivations and goals. It will also help you understand the character's place in the world, and how they fit into the story of the game. Work with your Story Teller to come up with a backstory that works with within his Adventure and the world of Gumshoe."
          image={backstoryPic}
          imageAlt="man standing with fedora"
        />

        <Classes />
        <Back2Top />
        <Skills />
        <Dice />
        <Back2Top />
        <CheatSheet />
        <CharSheetBreak />
        <Back2Top />
        <DCS />
        <Back2Top />
        <Downloads />
      </section>
    </div>
  );
};

export default Player;
