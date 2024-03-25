import React from 'react';
import PenroseHeader from './penroseHeader';
import postCard from '../assets/images/postcard-main.jpg';
import frank from '../assets/images/frank.jpg';
import neonCity2 from '../assets/images/neoncity2.jpg';
import agents2 from '../assets/images/agents2.jpg';
import alienInvasion from '../assets/images/alien-invasion.jpg';
import ruby from '../assets/images/ruby.jpg';

const TheStory = () => {
  return (
    <section className="container">
      <h1 className="column">
        <PenroseHeader />
        The Story
      </h1>
      <article className="column">
        <img src={postCard} alt="postcard" />
        <p>
          Rain hammered the grimy windowpane, blurring the neon symphony outside
          into a watercolor of sin. The dame in the red dress had been gone for
          five years, swallowed by something from the sky. Or so I thought. The
          postcard, yellowed with age and travel, was a tangible ghost: her
          familiar scrawl whispering promises from a city that shimmered with
          both chrome and sleaze - Neon City, a city of glitz and vice carved
          from the rocky coast. A city that had swallowed men whole.
        </p>
      </article>
      <article className="column">
        <p>
          But whispers tell of her murder – a death she seem to have cheated
          once before, somehow, but couldn&apos;t again. Now, amidst the crooked
          cops and ruthless gangsters of this 1930s underworld, you arrive to
          find yourself entangled in a mystery far stranger than you imagined.
          Secret agents from the clandestine Penrose Division,
          prohibition-flouting speakeasies, and the seductive thrum of jazz
          clubs form the backdrop of your search for the truth about who killed
          your lover and the identity of the mysterious agents following you.
        </p>
        <img src={frank} alt="neon city scene" />
      </article>
      <article className="column">
        <img src={neonCity2} alt="neon city scene" />
        <p>
          But even the city&apos;s dazzling lights can&apos;t mask the dark
          secrets it holds. Your only hope seems to be Frank Hodgkins, a haggard
          and perpetually-drunk detective with a gruff exterior and a
          surprisingly noble sense of morality. Though his cynicism runs deep,
          the glint of determination in his bloodshot eyes hints at a past that
          fuels his refusal to turn a blind eye to the city&apos;s corruption.
        </p>
      </article>

      <article className="column">
        <p>
          Another ally comes in the form of Ruby Dubois, a young, aspiring jazz
          singer with a voice as smooth as velvet and eyes that beamed with
          curiosity. Her dreams of the spotlight intertwine with yours as she
          too longs to unravel the mysteries that threaten to consume Neon City.
          Her reasons may remain unclear, but her loyalty is unwavering.
        </p>
        <img src={ruby} alt="Ruby Dubois" />
      </article>

      <article className="column">
        <img src={agents2} alt="penrose agents" />

        <p>
          You will be pursued by Agents of the Mysterious Penrose Division of
          the FBI. Their goals and interests unknown, they seem to be stalking
          your every move. They are a force to be reckoned with and will stop at
          nothing to keep you from uncovering the truth.
        </p>
      </article>
      <article className="column">
        <p>
          Together, you&apos;ll navigate the neon-drenched labyrinth, armed with
          your wits, a flicker of impossible hope, and the unlikely alliance of
          a washed-up detective and a fiery songbird, all to unravel a
          conspiracy that twists the very fabric of reality. <br />
          <br />
          This is Gumshoe the Role Playing Game!
        </p>
        <img
          src={alienInvasion}
          alt="alien invasion with man in fedora and trench coat"
        />
      </article>
    </section>
  );
};

export default TheStory;
