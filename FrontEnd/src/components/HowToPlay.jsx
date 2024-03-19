import React from 'react';
import PenroseHeader from './penroseHeader';
import dame from '../assets/images/dame.jpg';
import fedora from '../assets/images/fedora.jpg';

const HowToPlay = () => {
  return (
    <section className="container instructions">
      <h1>
        <PenroseHeader />
        How to Play
      </h1>
      <h3>
        Check the{' '}
        <a id="mystery" href="#downloads">
          Downloads Section
        </a>
        <br />
        for Character Sheet
      </h3>
      <article className="column avatar">
        <img src={dame} alt="woman smoking" />
        <p>
          Rain slicked the neon-drenched streets of Neon City, reflecting the
          city&apos;s seedy underbelly in a distorted kaleidoscope. In this
          concrete jungle, the only warmth came from the cheap whiskey swirling
          in your glass.
          <br />
          <br />
          Gumshoe Neon City, the dame whispered, tracing a fingertip across the
          condensation on the glass. &quot;A role-playing game for you and your
          pals, she purred.&quot; One of you, the grizzled storyteller, sets the
          scene, weaving a web of lies and secrets as thick as the fog rolling
          off the docks. The rest of you, hardened gumshoes with more scars than
          morals, step into the neon-lit shadows, chasing phantoms and buried
          truths.
        </p>
      </article>
      <article className="column avatar">
        <p>
          Every choice you make ripples through the story, twisting the
          narrative like a bullet ricocheting off a mirrored wall. Encounters
          with shifty molls and two-bit thugs test your mettle. Cryptic clues,
          buried deep in the city&apos;s underbelly, whisper of a conspiracy
          bigger than your wildest dreams.
          <br />
          <br />
          The dame&apos;s death, once a closed case, now bleeds suspicion. Was
          she really dead? Or was she just another pawn in a game you
          didn&apos;t even know you were playing? Neon City holds more secrets
          than a double-breasted trench coat has pockets, and you&apos;ll need
          all your wits, brawn, and maybe a good dame on your side to survive
          its dark embrace. <br />
          <br />
          So grab your fedora, slug down the rest of that whiskey, and step into
          the neon abyss. The clock&apos;s ticking, gumshoe. And in Neon City,
          time is measured in bullets.
        </p>
        <img src={fedora} alt="man in fedora" />
      </article>
      <article className="row4">
        <div className="role">
          <span className="row big">⚜</span>

          <span className="list column sub-title">Choose a Role:</span>
          <span className="list column">StoryTeller</span>
          <span className="list column">Player</span>
        </div>
        <div className="role">
          <span className="row big">⚜</span>
          <span className="sub-title list column">Necessary Resources:</span>
          <span className="list column">Character Sheet & Pencil</span>
          <span className="list column">Standard RPG Dice</span>
          <span className="list column">Your Imagination!</span>
        </div>
      </article>
    </section>
  );
};

export default HowToPlay;
