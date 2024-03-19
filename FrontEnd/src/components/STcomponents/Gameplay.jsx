import React from 'react';
import CreativeActions from './CreativeActions';
import Skills from './Skills';
import LuckXP from './LuckXP';
import barmen from '../../assets/images/barmen.jpg';

const Gameplay = () => {
  return (
    <section>
      <h3 id="gameplay">
        Gameplay <br />
        Skills, Actions, and Points:
      </h3>

      <h2>So how do you play?</h2>

      <article className="card column">
        <p>
          Gameplay is simple. <br />
          After the character is created the Story Teller sets the scene. Each
          player then reacts to the scene. You&apos;ve already seen how combat
          works, but what about non-combat actions?
          <br />
          The player can react to the scene in a variety of ways. For instance
          let&apos;s say they are in smokey Jazz Hall searching for a Gangster.
          The Gangster runs.
        </p>
        <img src={barmen} alt="mysterious men at bar" />
      </article>
      <div className="card">
        <p>
          They can:
          <br />
          ● Command him to stop
          <br />
          ● Persuade the Bouncer to help
          <br />
          ● Give Chase
          <br />
          ☑ If they try to command him to stop they would roll a Intimidate
          Skill Check and any Bonus&apos; in Intimidation
          <br />
          ☑ If they try to persuade the Bouncer they would roll a Persuasion
          Skill check and add any Bonus&apos; in Persuasion.
          <br />
          ☑ If they give chase they would roll an Athletics Skill check and add
          any Bonus&apos; in Athletics.
          <br />
        </p>
      </div>
      <CreativeActions />
      <Skills />
      <LuckXP />
    </section>
  );
};

export default Gameplay;
