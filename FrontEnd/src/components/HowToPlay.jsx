import React from 'react';
import PenroseHeader from './penroseHeader';
import dame from '../assets/images/dame.jpg';
import fedora from '../assets/images/fedora.jpg';
import LeftCard from './Reuseable/Home/LeftCard';
import BreakCardMiddleLeft from './Reuseable/Home/BreakCardMiddleLeft';
import BreakCardMiddleRight from './Reuseable/Home/BreakCardMiddleRight';
import RoleInfographic from './RoleInfographic';
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

      <BreakCardMiddleLeft
        image={dame}
        imageAlt="woman smoking"
        content1="Rain slicked the neon-drenched streets of Neon City, reflecting the city's seedy underbelly in a distorted kaleidoscope. In this concrete jungle, the only warmth came from the cheap whiskey swirling in your glass."
        content2="Gumshoe Neon City, the dame whispered, tracing a fingertip across the condensation on the glass. A role-playing game for you and your pals, she purred. One of you, the grizzled storyteller, sets the scene, weaving a web of lies and secrets as thick as the fog rolling off the docks. The rest of you, hardened gumshoes with more scars than morals, step into the neon-lit shadows, chasing phantoms and buried truths."
      />

      <BreakCardMiddleRight
        content1="Every choice you make ripples through the story, twisting the narrative like a bullet ricocheting off a mirrored wall. Encounters with shifty molls and two-bit thugs test your mettle. Cryptic clues, buried deep in the city's underbelly, whisper of a conspiracy bigger than your wildest dreams."
        content2="The dame's death, once a closed case, now bleeds suspicion. Was she really dead? Or was she just another pawn in a game you didn't even know you were playing? Neon City holds more secrets than a double-breasted trench coat has pockets, and you'll need all your wits, brawn, and maybe a good dame on your side to survive its dark embrace."
        image={fedora}
        imageAlt="man in fedora"
      />
      <LeftCard
        content="So grab your fedora, slug down the rest of that whiskey, and step into
          the neon abyss. The clock's ticking, gumshoe. And in Neon City,
          time is measured in bullets."
      />

      <RoleInfographic />
    </section>
  );
};

export default HowToPlay;
