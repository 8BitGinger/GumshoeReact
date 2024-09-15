import React from 'react';
import blankBack from '../../assets/images/blank-back.png';
import anchor2 from '../../assets/images/anchor2.png';
import harborSingle from '../../assets/images/harborSingle.png';
import carGoods from '../../assets/images/carGoods.png';
import captainCutlass from '../../assets/images/captainCutlass.png';
import harborPic from '../../assets/images/harbor.png';
import AnimatedCard from '../Reuseable/AnimatedCard';
import AnimatedCardRight from '../Reuseable/AnimatedCardRight';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';
import LeftCard from '../Reuseable/Home/LeftCard';

const harbor = () => {
  return (
    <div>
      <section className="container" id="harbor">
        <h2>The Harbor:</h2>

        <AnimatedCardRight
          imageAlt="anchor logo"
          image={anchor2}
          content1="Here, the neon lights that bled into the night sky above met their watery demise, staining the oily surface with a fractured reflection of the city's decadence. Rusted cranes, like skeletal giants, reached for the polluted sky, while grimy freighters belched plumes of black smoke, a stark counterpoint to the dazzling skyline."
          content2="This was a place where the salt-laced breeze carried the tang of adventure, the clang of industry, where the whispers of a thousand shady deals struck in the shadows of towering cargo containers and the unsettling suspicion that many an unlucky soul had found a permanent resting place beneath the harbor's oily sheen."
          imgClass="abs float2"
        />

        <ThreeCardDisplay
          image1={captainCutlass}
          image2={harborSingle}
          image3={carGoods}
          imageAlt1="Captain 'Cutlass' Kim"
          imageAlt2="The Docks"
          imageAlt3="The Black Market"
          charDesc1="Captain 'Cutlass' Kim commands the 'Full Moon,' a rickety freighter that reeked more of fish and desperation than luxury. Rumors swirled about her past, whispers of a pirate captain on a hidden sea, though Kim herself remained tight-lipped, her only confidante a talking parrot with a vocabulary as foul as the harbor itself. The only constant about Kim was a silver amulet that dangled from her neck, its inscription an enigma even to the most skilled codebreakers."
          charDesc2="The docks themselves were a haven for those who operated on the fringes. Gruff longshoremen, their muscles knotted from years of back-breaking labor, unloaded cargo with a practiced indifference, their eyes always scanning for opportunities to skim. Shady figures, perpetually in shadows, lurked in warehouses brimming with exotic goods and questionable merchandise. Here, deals were struck with handshakes and terse nods, loyalty as fleeting as the ocean currents."
          charDesc3="The Black Market thrived under the watchful eyes of rusted cranes and the oily sheen of the water. Stacks of uncut diamonds glittered like fallen stars, their brilliance a stark contrast to the dull gleam of pilfered weapons. And tucked away in a shadowed corner, shrouded in an oily tarp, might lie the ultimate prize – a gleaming Skylark automobile, fresh off a freighter and ready to disappear into the neon labyrinth of the city."
          charName1={'Captain "Cutlass" Kim'}
          charName2={'The Docks'}
          charName3={'The Black Market'}
        />

        <LeftCard
          image={harborPic}
          imageAlt="harbor"
          content="Neon City's harbor pulsed with a life all its own. Here, the rhythmic clang of industry mingled with the salty tang of the sea, a stark contrast to the neon symphony above. Shady deals went down under the watchful gaze of rusted cranes, whispers carried on the ever-present breeze. Players with a knack for thievery could mingle with dockworkers, their pockets potentially lined with pilfered goods Captain Kim might 'accidentally' overlook if the price was right. Need a place to lay low after a messy heist? The rickety taverns lining the docks offered a temporary haven, a place to disappear into the anonymity of the harbor's underbelly for a price, of course. But remember, in Neon City's harbor, every shadow hides a secret, and every corner whispers a story. Just be careful which ones you choose to listen to."
        />
      </section>
    </div>
  );
};

export default harbor;
