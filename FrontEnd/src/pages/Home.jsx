// import song from '../assets/audio/background2.mp3';
// import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DevCard from '../components/DevCard';
import Downloads from '../components/Downloads';
import NewsPaper from '../components/NewsPaper';
import TheStory from '../components/TheStory';
import HowToPlay from '../components/HowToPlay';
import GraphicBanner from '../components/GraphicBanner';
import Players from '../components/Players';
import StoryTellers from '../components/STs';
import logoImage from '../assets/images/document-logo-sepia2.png';
import Back2Top from '../components/Back2Top';
import PlayerBanner from '../components/Pcomponents/PlayerBanner';
import StoryBanner from '../components/STcomponents/storyBanner';
import LandingModalWrapper from '../components/LandingModalWrapper';

const Home = () => {
  const [initialState, setInitialState] = useState(true);

  return (
    <div className="overlay spacer" id="top">
      <section id="intro" className="container intro">
        <h1 className="starter">
          <img className="gumshoe" src={logoImage} alt="logo" />

          <br />
          <br />
          <span className="bring-forward">Neon City </span>

          <span className="date">☆☆☆ June 6, 1936 ☆☆☆</span>
        </h1>
      </section>
      <LandingModalWrapper
        modalTitle="Watch it Again!"
        initialState={initialState}
      ></LandingModalWrapper>

      <NewsPaper />
      <TheStory />
      <GraphicBanner />
      <HowToPlay />
      <Back2Top />
      <Players />
      <PlayerBanner />
      <Back2Top />
      <StoryTellers />
      <StoryBanner />
      <Back2Top />
      <Downloads />
      <Back2Top />
      <DevCard />
      <Back2Top />
    </div>
  );
};

export default Home;
