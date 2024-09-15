import React from 'react';
import PenroseHeader from './penroseHeader';
import postCard from '../assets/images/postcard-main.jpg';
import frank from '../assets/images/frank.jpg';
import abduction from '../assets/images/abduction.png';
import agents2 from '../assets/images/agents2.jpg';
import alienInvasion from '../assets/images/alien-invasion.jpg';
import ruby from '../assets/images/ruby.jpg';
import LeftCard from './Reuseable/Home/LeftCard';
import RightCard from './Reuseable/Home/RightCard';

const TheStory = () => {
  return (
    <section className="container">
      <h1 className="column">
        <PenroseHeader />
        The Story
      </h1>
      <LeftCard
        image={postCard}
        imageAlt="postcard"
        content="Rain hammered the grimy windowpane, blurring the neon symphony outside into a watercolor of sin. The dame in the red dress had been gone for five years, swallowed by something from the sky. Or so I thought. The postcard, yellowed with age and travel, was a tangible ghost: her familiar scrawl whispering promises from a city that shimmered with both chrome and sleaze - Neon City, a city of glitz and vice carved from the rocky coast. A city that had swallowed men whole."
      />
      <RightCard
        image={abduction}
        imageAlt="alien abduction"
        content="Past whispers. A cheated death, claimed by a screaming light in the dead of night. Her ghost and a flimsy postcard led you to Neon City, a metropolis teeming with secrets. From the clandestine shadows of the Penrose Division to the smoky jazz dives where gangsters rub elbows with crooked cops, you're in deeper than you thought."
      />
      <LeftCard
        image={frank}
        imageAlt="Frank Hodgkins"
        content="But even the city's dazzling lights can't mask the dark secrets it holds. Your only hope seems to be Frank Hodgkins, a haggard and perpetually-drunk detective with a gruff exterior and a surprisingly noble sense of morality. Though his cynicism runs deep, the glint of determination in his bloodshot eyes hints at a past that fuels his refusal to turn a blind eye to the city's corruption."
      />

      <RightCard
        image={ruby}
        imageAlt="Ruby Dubois"
        content="Another ally comes in the form of Ruby Dubois, a young, aspiring jazz singer with a voice as smooth as velvet and eyes that beamed with curiosity. Her dreams of the spotlight intertwine with yours as she too longs to unravel the mysteries that threaten to consume Neon City. Her reasons may remain unclear, but her loyalty is unwavering."
      />

      <LeftCard
        image={agents2}
        imageAlt="penrose agents"
        content="You will be pursued by Agents of the Mysterious Penrose Division of the FBI. Their goals and interests unknown, they seem to be stalking your every move. They are a force to be reckoned with and will stop at nothing to keep you from uncovering the truth."
      />

      <RightCard
        image={alienInvasion}
        imageAlt="alien invasion"
        content="Together, you'll navigate the neon-drenched labyrinth, armed with your wits, a flicker of impossible hope, and the unlikely alliance of a washed-up detective and a fiery songbird, all to unravel a conspiracy that twists the very fabric of reality."
      />
    </section>
  );
};

export default TheStory;
