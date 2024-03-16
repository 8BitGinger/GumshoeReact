// import song from '../assets/audio/background2.mp3';
// import useSound from 'use-sound';
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import DevCard from '../components/DevCard';
import Downloads from '../components/Downloads';
import NewsPaper from '../components/NewsPaper';
import TheStory from '../components/TheStory';
// import Mute from '../components/Mute';
import HowToPlay from '../components/HowToPlay';
import GraphicBanner from '../components/GraphicBanner';

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
      <section className="container">
        <h1>
          <img
            id="page-top spin"
            className="page-top spin"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          Players
        </h1>
        <h3>
          Players <Link to="/player">Click Here</Link>
        </h3>
        <article className="column avatar">
          <img src="src/assets/images/players.jpg" alt="guy with gun" />
          Neon City ain't a place for the nameless, partner. Before you even set
          foot in this concrete jungle, you gotta craft your own legend. Name,
          className, and the dirty details of your past. You could be a hardened
          Hardboiled Detective, a relic from a bygone era with a trench coat as
          worn as your soul. Maybe you're a slick Gangster, your silver tongue
          sharper than any blade. Or perhaps you're a struggling talented
          Musician, navigating the city's underbelly with the soul of a poet.
          <br />
          <br />
          So, craft your legend wisely, because in Neon City, your reputation
          can precede you.
          <br />
          <br />
          See more on the Players page!
        </article>
      </section>
      <section className="container">
        <h1>
          <img
            id="page-top spin"
            className="page-top spin"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          StoryTellers
        </h1>
        <h3>
          StoryTellers
          <br></br>
          <Link to="/storyTeller">Info Alley</Link>
          <br></br>
          <Link to="/neonCity">Hit the Streets</Link>
        </h3>

        <article className="column avatar">
          <img
            src="src/assets/images/storyteller.jpg"
            alt="sketch of noir man with hat"
          />
          In the grand game of mystery, you, the Story Teller, are the puppet
          master, weaving a web of intrigue for your players to unravel. You are
          an artist sketching the world around them and making the characters
          come to life. But like a good poker dealer, you gotta keep your cards
          close. Scatter clues like breadcrumbs through the shadowed alleys and
          smoke-filled rooms of your narrative. Finding the right balance is a
          tightrope walk. Too easy, and your players get bored, the case
          cracking with a yawn instead of a bang. Too cryptic, and they're left
          flailing in the dark, the frustration thicker than week-old cigar
          smoke.
        </article>
      </section>
      <Downloads />
      <DevCard />
      {/* <Mute song={song} /> */}
    </div>
  );
};

export default Home;
