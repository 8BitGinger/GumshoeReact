import React from 'react';

const DeathInjury = () => {
  return (
    <section>
      <h2>Death and Injury</h2>

      <article className="card column">
        <img src="src/assets/images/death.png" alt="death logo" />
        <p>
          {' '}
          DEATH AND INJURY
          <br />
          Here a bad decision can leave you stiffer than a rigged poker deck.
          Here is how Death and Injury work in Gumshoe:
          <br />
          If a player reaches 0 HP they are considered incapacitated.
          <br />
          If they reach -5 HP they are considered mortally wounded and will die
          in 1D4 rounds, unless attended to.
          <br />
          If they reach -10 HP they are considered dead.
          <br />
          They can be healed with Medical Skill Checks or First Aid Kits.
        </p>
      </article>

      <article className="card column">
        <p>
          Neon City ain&apos;t kind to the careless, chum. Take a wrong turn
          down a dark alley or rub the wrong dame the wrong way, and you might
          just find yourself pushing up daisies (or worse, feeding the fishes in
          the harbor). But hey, that&apos;s the beauty of this game, right?
          <br />
          <br />
          The Storyteller, yourself, gets to decide if your story ends with a
          whimper or a bang. It&apos;s a story only you can tell!
        </p>
        <img
          className="upside-down"
          src="src/assets/images/death.png"
          alt="skull and crossbones"
        />
      </article>
    </section>
  );
};

export default DeathInjury;
