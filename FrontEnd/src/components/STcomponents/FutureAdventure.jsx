import NeonCityStarterAdventure from '../../assets/downloads/NeonCity-StarterAdventure.pdf';
import neoncitySepia from '../../assets/images/readme/neoncity-sepia.jpg';
import hollywoodlandSepia from '../../assets/images/readme/hollywoodland-sepia.jpg';
import riorevengeSepia from '../../assets/images/readme/riorevenge-sepia.jpg';
import russianightsSepia from '../../assets/images/readme/russiannights-sepia.jpg';
import multiverseSepia from '../../assets/images/readme/multiverse-sepia.jpg';
import RightCard from '../Reuseable/Home/RightCard';
import LeftCard from '../Reuseable/Home/LeftCard';

const FutureAdventure = () => {
  return (
    <section id="adventure">
      {' '}
      <h3>
        Starter Adventure <br />
        <a href={NeonCityStarterAdventure} download>
          Download Chapter 1
        </a>
      </h3>
      <RightCard
        content="Rain slicked the chrome of my trench coat, the neon glow of Neon City bleeding into the puddles like spilled dreams. This dame, long gone and presumed dead, had resurfaced on a flimsy postcard. Her message, a cryptic plea for help, tugged at the ghost of what we once had. Neon City. A rocky hideaway where pleasure and peril intertwined like vipers in a heat haze. I wasn't built for sunshine and sand, my skills honed in the shadows of steel canyons. But a dame in distress? That's a case I couldn't walk away from."
        image={neoncitySepia}
        imageAlt="neon city logo"
      />
      <h3>Future Adventures</h3>
      <LeftCard
        content="The smog hung heavy over Tinseltown, a sickly yellow halo above the hazy dreamscape. Here, ambition dripped like sweat under the merciless California sun, where fortunes were made and shattered faster than a celluloid kiss. Dames with million-dollar smiles hawked their wares, and chisel-jawed fellas with steely gazes dreamt of the silver screen. But beneath the glitz, a darkness festered. Whispers slithered through back alleys, tales of things unnatural, of creatures from beyond the frame. Hollywoodland, they called it. More like Hollyweirdland, a place where the scripts got stranger than anything dreamed up by a drunken screenwriter. You, chum, are the only shamus with the guts (and the bottle) to wade through this celluloid nightmare."
        image={hollywoodlandSepia}
        imageAlt="hollywoodland logo"
      />
      <RightCard
        content="The Amazon humidity hung heavy in Rio, a suffocating cloak over the vibrant chaos. Christ the Redeemer, its skeletal form reaching towards the hazy sky, offered no solace. Here, in 1936 Rio, the samba pulsed with a darker rhythm. I, a weary gumshoe used to the grit of Neon City, had arrived for some sun-drenched R'R. But past sins are like stray bullets, they have a way of finding you, even in paradise. A face from a forgotten case materialized across the casino floor – Frankie 'The Fox' Moretti, the brother of a man I once killed. He shouldn’t be here, breathing, radiating barely contained rage. Looks like my Rio vacation just took a sharp turn into a labyrinth of showgirls with deadly secrets, a murder threatening to ignite a war, and Frankie 'The Fox' Moretti thirsting for revenge as cold as a Rio night. This dame in distress wouldn’t be wearing a swimsuit, but a shroud."
        image={riorevengeSepia}
        imageAlt="revenge in rio logo"
      />
      <LeftCard
        content="Moscow, a frozen tomb bathed in perpetual twilight. Not exactly your
          typical tourist trap. You, a gumshoe with a nose for trouble and a
          taste for cheap vodka, were partnered with Nika Arovka, a Soviet
          ambassador with a smile too sharp and eyes like glacial ice. Whispers
          of strange men in uniforms and ancient alien devices with world-ending
          power sent you both hurtling through this frozen hell. Tracked once
          again by the Mysterious Penrose Division: you, a down-on-your-luck
          detective, and a femme fatale with buried secrets, were all that stood
          between oblivion and a world cracked open like a rotten egg."
        image={russianightsSepia}
        imageAlt="russian nights logo"
      />
      <RightCard
        content="The last case went sideways faster than a greased getaway car. Now, you find yourself yanked from the familiar grime and grit and deposited in... well, who even knows? The Penrose Division, that's what they call themselves. Seems this rabbit hole runs deeper than a bootleg speakeasy. Multiverse travel, alternate realities, alien threats, the whole kit and kaboodle. All under the steely gaze of your new boss, April Sunday. A dame with a name that wouldn't be out of place in a bygone era, stuck in a world that makes yesterday's case look like a walk in the park. One thing's for sure, shamus: the gloves are off. Crack the case with the help of your new partner Nika Arovka, stop whatever's bleeding through the seams of reality, and maybe, just maybe, impress Ms. Sunday enough to learn the mystery that started this whole adventure!"
        image={multiverseSepia}
        imageAlt="agents of the multiverse logo"
      />
    </section>
  );
};

export default FutureAdventure;
