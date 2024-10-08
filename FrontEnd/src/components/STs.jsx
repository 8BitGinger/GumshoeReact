import React from 'react';
import { Link } from 'react-router-dom';
import PenroseHeader from './penroseHeader';
import stPic from '../assets/images/storyteller.jpg';
import BreakCardMiddleLeft from './Reuseable/Home/BreakCardMiddleLeft';

const StoryTellers = () => {
  return (
    <section className="container">
      <h1>
        <PenroseHeader />
        StoryTellers
      </h1>
      <h3>
        StoryTellers
        <br></br>
        <Link to="/storyTeller">Info Alley</Link>
        <br></br>
        <Link to="/neonCity">Hit the Streets</Link>
      </h3>

      <BreakCardMiddleLeft
        image={stPic}
        imageAlt="sketch of noir man with hat"
        content1="In the grand game of mystery, you, the Story Teller, are the puppet master, weaving a web of intrigue for your players to unravel. You are an artist sketching the world around them and making the characters come to life. But like a good poker dealer, you gotta keep your cards close. Scatter clues like breadcrumbs through the shadowed alleys and smoke-filled rooms of your narrative. "
        content2="Finding the right balance is a tightrope walk. Too easy, and your players get bored, the case cracking with a yawn instead of a bang. Too cryptic, and they're left flailing in the dark, the frustration thicker than week-old cigar smoke."
      />
    </section>
  );
};

export default StoryTellers;
