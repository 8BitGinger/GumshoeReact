// import song from '../assets/audio/background2.mp3';
// import useSound from 'use-sound';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import DevCard from '../components/DevCard';
import Downloads from '../components/Downloads';
import NewsPaper from '../components/NewsPaper';
import TheStory from '../components/TheStory';
import HowToPlay from '../components/HowToPlay';
import GraphicBanner from '../components/GraphicBanner';
import Players from '../components/Players';
import StoryTellers from '../components/STs';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="overlay spacer" id="top">
      <section id="intro" className="container intro">
        <h1 className="starter">
          <img
            className="gumshoe"
            src="src/assets/images/document-logo-sepia2.png"
            alt="logo"
          />
          <br />
          <br />
          <br />
          <span>Neon City </span>

          <span className="date">☆☆☆ June 6, 1936 ☆☆☆</span>
        </h1>
      </section>
      <NewsPaper />
      <TheStory />
      <GraphicBanner />
      <HowToPlay />
      <Players />
      <StoryTellers />
      <Downloads />
      <DevCard />
      <Footer />
    </div>
  );
};

export default Home;
