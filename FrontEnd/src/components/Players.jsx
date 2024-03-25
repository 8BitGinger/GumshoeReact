import React from 'react';
import { Link } from 'react-router-dom';
import playerPic from '../assets/images/players.jpg';
import PenroseHeader from './penroseHeader';

const Players = () => {
  return (
    <section className="container">
      <h1>
        <PenroseHeader />
        Players
      </h1>
      <h3>
        Players <Link to="/player">Click Here</Link>
      </h3>
      <article className="column avatar">
        <img src={playerPic} alt="guy with gun" />
        <p>
          Neon City ain&apos;t a place for the nameless, partner. Before you
          even set foot in this concrete jungle, you gotta craft your own
          legend. Name, Class, and the dirty details of your past. You could be
          a hardened Hardboiled Detective, a relic from a bygone era with a
          trench coat as worn as your soul. Maybe you&apos;re a slick Gangster,
          your silver tongue sharper than any blade. Or perhaps you&apos;re a
          struggling talented Musician, navigating the city&apos;s underbelly
          with the soul of a poet.
          <br />
          So, craft your legend wisely, because in Neon City, your reputation
          can precede you.
          <br />
          <br />
          See more on the Players page!
        </p>
      </article>
    </section>
  );
};

export default Players;
