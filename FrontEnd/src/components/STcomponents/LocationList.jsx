import React, { useState } from 'react';

import dayjs from 'dayjs';

let time = dayjs().format('h:mm:ss A');
console.log(time);

function LocationList() {
  const [locations, setLocations] = useState([]);

  const generateLocations = () => {
    const newLocations = [];
    for (let i = 0; i < 1; i++) {
      // Adjust loop count for desired number of locations
      const name = generateName();
      const description = generateDescription();
      newLocations.push({ name, description });
    }
    setLocations(newLocations);
  };

  const generateName = () => {
    const names = [
      'Anchor',
      'Alcove',
      'Orchid',
      ' Funhouse',
      'Labyrinth',
      'Lair',
      'Warehouse',
      'Harbor',
      'Grind',
      'Tavern',
      'Hideaway',
      'Bucket',
      'Screwdriver',
    ];

    const desc = [
      'Rusty',
      'Blue',
      'Midnight',
      'Salty',
      'Dusty',
      'Forbidden',
      'Hidden',
      'Crimson',
      'Enchanted',
      'Gilded',
      'Smoky',
      'Whispering',
      'Windy',
      'Blind',

      'Neon',
      'Broken',
      'Onyx',
      'Ironclad',
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomIndex2 = Math.floor(Math.random() * desc.length);

    return 'The' + ' ' + desc[randomIndex2] + ' ' + names[randomIndex]; // Add random suffix
  };

  const generateDescription = () => {
    const descriptions = [
      'A smoky jazz club pulsating with live music and whispered secrets. Crimson velvet drapes and flickering gaslights cast long shadows over patrons nursing illicit cocktails.',
      'A salty dive bar frequented by dockworkers, sailors with stories etched on their faces, and those seeking to disappear in a haze of cheap whiskey and cigarette smoke.',
      'A luxurious hotel catering to the elite. Plush carpets muffle the sounds of high-stakes gambling and clandestine affairs conducted behind gilded doors.',
      'A fun-house carnival of distorted reflections and malfunctioning machinery.  Eerie laughter echoes through the warped halls, a haven for thrill-seekers or those seeking a shady alibi.',
      'Bookstore with dusty shelves crammed with forbidden literature, rare first editions, and whispered rumors. The proprietor, a figure shrouded in shadows, knows the secrets hidden within the pages.',
      'A burlesque club where scantily clad dancers tantalize audiences with suggestive routines.  More than just entertainment, whispers suggest the club is a front for less than savory activities.',
      'Local Nickname for a ramshackle pier jutting out into the harbor.  Salty air mingles with the smell of fish and desperation.  Fortune tellers with questionable talents peddle hope to the lost and lovelorn.',
      'A clandestine gambling den tucked away in a forgotten corner of the city.  High rollers gather around smoke-filled tables, risking fortunes on the turn of a card or the roll of the dice.',
      'A dingy pawnshop reeking of mothballs and desperation. Tarnished trinkets and forgotten treasures line the shelves, each object holding a whisper of its past owners life.',
      'A speakeasy disguised as a florist shop. Behind a fragrant facade lies a dimly lit den of iniquity, offering potent cocktails and illicit activities to those with the right password.',
      'A greasy spoon diner where weary souls and weary stomachs find solace. Coffee strong enough to wake the dead fuels late-night conversations and fuels rumors that travel faster than the sizzling bacon',
      'A rooftop speakeasy with a breathtaking view of the neon-drenched cityscape. Patrons, a mix of socialites and shady figures, mingle under the starlit sky, sipping on handcrafted cocktails and indulging in forbidden pleasures.',
      'Nickname for the local gym: a sweat-soaked haven for aspiring boxers and tough guys looking to let off steam. The rhythmic thump of punching bags and grunts of exertion provide a constant soundtrack, punctuated by the occasional smack of leather on flesh.',
      'A dimly lit parlor filled with the exotic scent of incense and the alluring voice of Madame Zoya. Palm readings, tarot cards, and cryptic pronouncements offer a glimpse into the future (or a cleverly crafted illusion) for those willing to pay the price.',
      'A once-grand theater, now a faded relic of a bygone era. Threadbare velvet seats and peeling paint whisper of forgotten performances. It is rumored to be haunted by the ghost of a scorned actress, searching for her final curtain call.',
      'A ramshackle bar on the outskirts of town, a haven for outlaws, drifters, and those seeking to disappear. Fights erupt as easily as laughter, fueled by cheap liquor and a shared sense of desperation.',
      'A vast, labyrinthine library hidden away in the heart of the city. Dusty tomes and crumbling scrolls hold the forgotten history of Neon City, waiting to be unearthed by a curious soul or a desperate investigator.',
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
  };

  return (
    <div className="tool">
      <h2>Random Locations</h2>

      {locations.length > 0 && (
        <ul>
          {locations.map((location) => (
            <li key={location.name + time}>
              <h4>{location.name}</h4>
              <p>{location.description}</p>
            </li>
          ))}
        </ul>
      )}

      <button className="btn btnGen" onClick={generateLocations}>
        Generate Location
      </button>
    </div>
  );
}

export default LocationList;
