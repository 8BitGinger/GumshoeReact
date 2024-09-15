import React, { useState } from 'react';

import dayjs from 'dayjs';

let time = dayjs().format('h:mm:ss A');

function ClueHook() {
  const [clueHook, setClueHook] = useState([]);
  const [selected, setSelected] = useState(false);

  const generateClueHook = () => {
    setSelected(true);
    const newClueHook = [];
    for (let i = 0; i < 1; i++) {
      // Adjust loop count for desired number of clueHook
      const clue = generateClue();
      newClueHook.push({ clue });
    }
    setClueHook(newClueHook);
  };

  const refresh = () => {
    setClueHook([]);
    setSelected(false);
  };

  const generateClue = () => {
    const clue = [
      'A priceless emerald necklace goes missing from a socialites private collection. The only clue: a porcelain doll with emerald eyes left at the scene. The players are hired to find the doll and the missing necklace, leading them down a rabbit hole of high society secrets and whispers of a criminal mastermind known as "The Puppeteer."',
      'A prominent businessman is found murdered aboard a grounded luxury airship docked at the Franklin Flyers hangar.  The airship, a marvel of engineering, was about to embark on its maiden voyage.  The players are tasked with finding the killer and preventing a scandal that could cripple Franklin Flyers.',
      'A faded shipping manifest recovered from the Rusty Anchor Tavern mentions a crate of "antique gramophones" delivered to a warehouse by the docks on the night of the murder.',

      'A cryptic note found hidden in a book purchased at The Blind Owl Bookstore reads: "The owl sees all, the whispers travel on the night wind. Seek the truth in the place of forgotten memories.',

      'A worn playing card (Queen of Spades) discovered at the crime scene has a single red feather tucked beneath it.',

      'A teary-eyed waitress at The Midnight Orchid spills the beans about a heated argument overheard between the victim and a "mystery guest" shortly before the murder.',

      'A coded message intercepted from police radio chatter mentions a "package drop" planned for tonight at the abandoned Ferris wheel on the outskirts of the city.',

      'A fingerprint lifted from the crime scene matches a notorious jewel thief known as "Dutch Diamond," last seen frequenting the Blue Onyx jazz club.',

      'A suspicious bulge is spotted beneath the trench coat of a shadowy figure lurking in the fog near the Whispering Wharf.',

      'A cryptic message scrawled on a bathroom stall at The Daily Grind reads: "The answers lie beneath the city, where the forgotten sleep." (referencing the Neon Necropolis)',

      'A frantic telegram received from a jittery telegraph operator (Twitchy Tim) mentions an overheard conversation about a "high-stakes game" planned for The Crimson Fox.',

      'A dusty newspaper clipping found in the archives details a past scandal involving the victim and a prominent socialite known as "Penny Pinchpenny."',

      'An ornately carved lighter engraved with the initials "SM" is found discarded near the scene of the crime.',

      'A half-empty bottle of a rare French perfume, "Rêve Nocturne" (Night Dream), is discovered on the victims nightstand.',

      'A single red rose with a thorn pricked finger is delivered anonymously to one of the players rooms at The Midnight Orchid.',

      'A coded message hidden within sheet music found at the Blue Onyx points to a secret meeting planned for tonight at a secluded pier rumored to be haunted.',

      'A cryptic riddle whispered by a street urchin mentions "a bird with broken wings" and "the place where dreams turn to dust" (referencing The Howling Wolf Theater).',

      'A pawn ticket retrieved from The Broken Compass leads to a specific tarnished silver locket, rumored to hold a dark secret.',

      'A hidden compartment discovered in a dusty suitcase at Ma Higgins boarding house reveals a faded photograph of the victim with an unknown individual.',

      'A coded message tattooed on the arm of a deceased gangster at The Rusty Nail mentions a "shipment arriving at dawn" and a specific warehouse location.',

      'A frantic phone call from a scared witness mentions seeing a "man with a limp" leaving the crime scene and disappearing into the fog near the docks.',

      'A single playing card (Ace of Spades) is found clutched in the victims hand, its edges slightly singed as if brushed by flame.,',
    ];
    const randomIndex = Math.floor(Math.random() * clue.length);
    return clue[randomIndex];
  };

  return (
    <div className="toolCard">
      <h2>Clues</h2>

      {clueHook.length > 0 && (
        <ul>
          {clueHook.map((clueHook) => (
            <li className="border1" key={clueHook.clue + time}>
              <p>{clueHook.clue}</p>
            </li>
          ))}
        </ul>
      )}

      {!selected ? (
        <button className="btn btnGen" onClick={generateClueHook}>
          Generate Clue
        </button>
      ) : (
        <button className="btn btnGen" onClick={refresh}>
          Refresh
        </button>
      )}
    </div>
  );
}

export default ClueHook;
