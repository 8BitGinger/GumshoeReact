import React, { useState } from 'react';

import dayjs from 'dayjs';

let time = dayjs().format('h:mm:ss A');

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  const generateCharacters = () => {
    const newCharacters = [];
    for (let i = 0; i < 3; i++) {
      // Adjust loop count for desired number of characters
      const name = generateName();
      const description = generateDescription();
      newCharacters.push({ name, description });
    }
    setCharacters(newCharacters);
  };

  const generateName = () => {
    const names = [
      'Dutch',
      'Scarlet',
      'Lefty',
      'Betty',
      'John',
      'Veronica',
      'Miles',
      'Helen',
      'Richard',
      'Barbara',
      'Sal',
      'Margaret',
      'Donald',
      'Maria',
      'George',
      'Sage',
      'Bartholomew',
      'Patricia',
      'JD',
      'Doris',
      'Billy',
      'Ruth',
      'Donnie',
      'Theodore',
      'Tommy',
      'Gabriel',
      'Louie',
      'Molly',
      'Lenny',
      'Penelope',
      'Roscoe',
      'Ma',
    ];

    const last = [
      'Smith',
      'Johnson',
      'Williams',
      'Jones',
      'Brown',
      'Moore',
      'Taylor',

      'Thomas',
      'Jackson',

      'Dupree',
      'Hardgrave',
      'Thompson',
      'Garcia',
      'Martinez',
      'Robinson',
      'Clark',
      'Rodriguez',
      'Lewis',
      'Lee',
      'Walker',
      'Coltrane',
      'Maloney',
      'Sparksworth',
      'Fitzgerald',
      'PinchPenny',
      'McGee',
      'LeFleur',
      'O Malley',
      'Sullivan',

      'DeVito',
      'Finch',
      'Marconi',
      'Von Trapp',
      'Baker',
    ];
    const randomIndex = Math.floor(Math.random() * names.length);

    const firstName =
      names[randomIndex] + ' ' + Math.random().toString(36).substring(2, 7);

    const lastname =
      last[randomIndex] + ' ' + Math.random().toString(36).substring(2, 7);

    return names[randomIndex] + ' ' + last[randomIndex]; // Add random suffix
  };

  const generateDescription = () => {
    const descriptions = [
      'A charismatic jewel thief with a penchant for flashy diamonds and disappearing acts. Rumors swirl about them having a hidden lair somewhere in the labyrinthine warehouses by the harbor.',
      'A sultry singer with a powerful voice and a mysterious past. They holds court at the infamous "Blue Onyx" jazz club, captivating audiences and fueling speculation about their connection to the city&apos;s underworld.',
      'A notorious bootlegger running a speakeasy disguised as a tailor shop. Their clientele includes high rollers, socialites, and even some cops looking to turn a blind eye for the right price',
      'A brilliant, but eccentric pathologist with a fascination for the macabre. They work at the city morgue, often moonlighting as a private investigator for those with "delicate" cases.',
      'A skilled mechanic and getaway driver with a garage on the outskirts of Neon City. They are known for loyalty, customized hot rods, and the ability to disappear into the night faster than a greased bullet.',
      'A shady lawyer with a network of contacts on both sides of the law. They can find anything you need (for a fee) and get you out of any jam (for an even steeper fee)',
      'A hulking enforcer for a notorious mob boss. A person of few words and an even shorter temper, best avoided unless you are looking for trouble.',
      'A wide-eyed rookie reporter for the Neon City Chronicle. They are eager to break a big story, but inexperience often lands them in hot water.',
      'A dance instructor at a seedy burlesque club. Despite their cheerful facade, they possesses a surprising amount of street smarts and might know more about the  underbelly than they lets on.',
      'A charismatic but cynical priest who runs a soup kitchen for the down-and-out. They offer a listening ear and a warm meal, but their connections to both the city elite and its criminal element make them a valuable source of information.',
      'A flamboyant owner of a high-end pawn shop. They possess an uncanny ability to appraise anything, from priceless antiques to stolen goods. Their shop is a treasure trove of secrets, both new and old.',
      'A former boxing champion turned nightclub bouncer. Their past their prime but still packs a punch. Don&apos;t even think about causing trouble on their watch.',
      ' A sharp-tongued socialite with a gambling addiction and a nose for gossip.  They spend their days flitting between high-society gatherings and underground gambling dens, always on the lookout for juicy tidbits.',
      'A brilliant, but eccentric inventor with a cluttered workshop hidden away in the industrial district. They create gadgets and gizmos that range from the useful to the utterly bizarre.',
      'A smooth-talking car salesman at Skylark Motors. They can sell ice to an Penguin and is rumored to have a side hustle dealing in "used" cars with questionable origins.',
      'The tough-as-nails owner of a boarding house that caters to drifters, down-on-their-luck sailors, and anyone with a few bucks for a bed. The boarding house is a melting pot of characters and a potential source of leads or trouble.',
      'An overzealous rookie cop with a misplaced sense of heroism. They dreams of becoming a big-shot detective but often gets in over their head due to impulsiveness.',
      'A jittery telegraph operator with an uncanny ability to remember every message they transmit. They could be a valuable source of information for those willing to pay his price - a strong cup of coffee, a fresh paper, and a game of chess!',
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  };

  return (
    <div className="tool">
      <h2>NPCs</h2>

      {characters.length > 0 && (
        <ul>
          {characters.map((character) => (
            <li key={character.name + time}>
              <h4>{character.name}</h4>
              <p>{character.description}</p>
            </li>
          ))}
        </ul>
      )}

      <button className="btn btnGen" onClick={generateCharacters}>
        Generate NPCs
      </button>
    </div>
  );
}

export default CharacterList;
