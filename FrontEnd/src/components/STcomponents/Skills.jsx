import React from 'react';
import townsfolk from '../../assets/images/townsfolk.jpg';
import d20 from '../../assets/images/d20.png';

const Skill = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <article className="card column">
        <p>
          In the grand carnival of roleplaying, your skills are the flashy
          costumes that make your character stand out from the crowd. Just like
          a seasoned grifter wouldn&apos;t be caught dead juggling bowling pins,
          you gotta pick skills that fit your backstory like a well-worn fedora.
          <br />
          Here&apos;s the deal: you start with 7 shiny skill points to dish out
          however you see fit. Maybe your character&apos;s a wisecracking
          detective with a silver tongue and a knack for picking pockets. Pump
          those points into &rdquo;Persuasion&rdquo; and &rdquo;Sleight of
          Hand&rdquo; and watch the suspects spill their guts faster than a
          two-dollar bottle of bootleg hooch.
          <br />
          Skill Checks are performed by using your Percent Dice and adding the
          appropriate Skill Bonus. The Story Teller will determine the
          difficulty of the check.
        </p>
        <img src={townsfolk} alt="people" />
      </article>
      <section>
        <div className="alert">
          <h4>It&apos;s not just about the dice!</h4>
        </div>

        <div className="row3 tray">
          <div className="left2">
            <img className="diced" src={d20} alt="d20" />
          </div>

          <div className="right2">
            <p>
              <span className="underline">*Max of 5 in Each Skill*</span>
              <br />
              ● Athletics - For physical or acrobat manuevers
              <br />
              ● Deception - Your ability to lie
              <br />
              ● Diplomacy - Your ability to negotiate
              <br />
              ● Driving - Your ability to pull off stunts
              <br />
              ● Forgery - Your ability to create fake documents
              <br />
              ● Intimidation - Intimidate Target
              <br />
              ● Investigation - Your ability to find clues
              <br />
              ● Medical - Your ability to heal wounds
              <br />
              ● Perception - Your ability to notice things
              <br />
              ● Performance - Your ability to entertain
              <br />
              ● Persuasion - Persuade Target
              <br />
              ● Seduction - Your ability to seduce
              <br />● Sleight of Hand - Steal Item / Hide Item
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skill;
