import React from 'react';
import townsfolk from '../../assets/images/townsfolk.jpg';
import d20 from '../../assets/images/d20.png';
import BreakBottomLeft from '../Reuseable/Home/BreakBottomLeft';
import LeftCard from '../Reuseable/Home/LeftCard';
import BulletCard from '../Reuseable/Home/BulletCard';

const Skill = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <BreakBottomLeft
        content="In the grand carnival of roleplaying, your skills are the flashy
          costumes that make your character stand out from the crowd. Just like
          a seasoned grifter wouldn't be caught dead juggling bowling pins,
          you gotta pick skills that fit your backstory like a well-worn fedora."
        image={townsfolk}
        imageAlt="people"
        tagline="Here's the deal: you start with 7 shiny skill points to dish out
          however you see fit. Maybe your character's a wisecracking
          detective with a silver tongue and a knack for picking pockets. Pump
          those points into 'Deception' and 'Intimidation' and watch the suspects spill their guts
          faster than a two-dollar bottle of bootleg hooch."
      />
      <LeftCard
        content="Skill Checks are performed by using your Percent Dice and adding the
          appropriate Skill Bonus. The Story Teller will determine the
          difficulty of the check."
      />

      <div className="alert">
        <h4>It&apos;s not just about the dice!</h4>
      </div>

      <div className="row3 tray">
        <div className="left2">
          <img className="diced" src={d20} alt="d20" />
        </div>

        <BulletCard
          classBullet="right2"
          content={[
            'Athletics - For physical or acrobat manuevers',
            'Deception - Your ability to lie',
            'Diplomacy - Your ability to negotiate',
            'Driving - Your ability to pull off stunts',
            'Intimidation - Intimidate Target',
            'Investigation - Your ability to find clues',
            'Medical - Your ability to heal wounds',
            'Perception - Your ability to notice things',
            'Performance - Your ability to entertain',
            'Persuasion - Persuade Target',
            'Seduction - Seduce Target',
          ]}
        />
      </div>
    </section>
  );
};

export default Skill;
