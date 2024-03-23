import React, { useState } from 'react';

import dayjs from 'dayjs';

let time = dayjs().format('h:mm:ss A');

function StoryHook() {
  const [storyHook, setStoryHook] = useState([]);

  const generateStoryHook = () => {
    const newStoryHook = [];
    for (let i = 0; i < 1; i++) {
      // Adjust loop count for desired number of storyHook
      const story = generateStory();
      newStoryHook.push({ story });
    }
    setStoryHook(newStoryHook);
  };

  const generateStory = () => {
    const story = [
      'A priceless emerald necklace goes missing from a socialites private collection. The only clue: a porcelain doll with emerald eyes left at the scene. The players are hired to find the doll and the missing necklace, leading them down a rabbit hole of high society secrets and whispers of a criminal mastermind known as "The Puppeteer."',
      'A prominent businessman is found murdered aboard a grounded luxury airship docked at the Franklin Flyers hangar.  The airship, a marvel of engineering, was about to embark on its maiden voyage.  The players are tasked with finding the killer and preventing a scandal that could cripple Franklin Flyers.',
      'The Howling Wolf Theater, once a cultural landmark, is rumored to be haunted by the ghost of a scorned actress. Strange occurrences plague the theater, and the new owner is desperate to get to the bottom of it. The players are hired to investigate the paranormal activity, but soon discover a more sinister plot at play.',
      'Blood on the Docks: A routine patrol of the docks takes a dark turn when the players discover a shipment of illegal narcotics and a murdered dockworker.  The trail of clues leads them to a web of corruption that reaches the highest levels of the Neon City power structure.',
      'A cryptic message found hidden within a rare book purchased at The Blind Owl Bookstore leads the players on a scavenger hunt through the cities forgotten corners.  Each location they visit unveils a piece of a larger conspiracy, forcing them to decide who to trust and what secrets are worth dying for.',
      'A down-and-out jazz musician at the Blue Onyx stumbles upon incriminating evidence against a powerful mob boss.  He blackmails the mob boss, but ends up dead the next day. The players are hired by the musicians friend to find his killer and expose the mob bosses crimes, but the mob does not give up its secrets easily.',
      'A series of bizarre murders in the Neon City art district have the city on edge. The players are hired to investigate the murders, but soon find themselves embroiled in a web of intrigue and deceit that leads them to the heart of the art world and a secret society of artists with a dark and deadly purpose.',
      'A group of war veterans turned vigilantes, operating out of The Rusty Nail bar,  have declared war on rampant crime. The players get caught in the crossfire between the vigilantes and the corrupt police force, forced to take a side in a conflict that threatens to tear Neon City apart.',
      'Madame Zoya, the enigmatic fortune teller, makes a chilling prediction: one of the players is in grave danger. The players must decipher her cryptic warnings and navigate a labyrinth of past choices and hidden enemies to avert a deadly fate.',
      'A high-stakes poker game at The Crimson Fox is interrupted by a masked gunman. In the ensuing chaos, a priceless diamond ring is stolen. The only witness claims the gunman appeared to vanish into thin air, thanks to the Hall of Mirrors Funhouse located next door. The players must delve into the distorted world of mirrors and illusions to find the thief and recover the stolen jewel.',
    ];
    const randomIndex = Math.floor(Math.random() * story.length);
    return story[randomIndex];
  };

  return (
    <div className="toolCard">
      <h2>Missions</h2>

      {storyHook.length > 0 && (
        <ul>
          {storyHook.map((storyHook) => (
            <li className="border1" key={storyHook.story + time}>
              <p>{storyHook.story}</p>
            </li>
          ))}
        </ul>
      )}

      <button className="btn btnGen" onClick={generateStoryHook}>
        Generate Mission
      </button>
    </div>
  );
}

export default StoryHook;
