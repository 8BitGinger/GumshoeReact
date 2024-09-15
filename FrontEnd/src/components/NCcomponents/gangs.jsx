import gangs2 from '../../assets/images/gangs2.png';
import razorRick from '../../assets/images/razorRick.png';
import twitchyTommy from '../../assets/images/twitchyTommy.png';
import jackals from '../../assets/images/jackals.png';
import AnimatedCard from '../Reuseable/AnimatedCard';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';

const gangs = () => {
  return (
    <div>
      <section className="container" id="gangs">
        <h2>The Gangs:</h2>

        <AnimatedCard
          image={gangs2}
          imageAlt="fist with chain logo"
          content1="The stench of stale sweat and fear clung to the abandoned warehouse like a second skin. Here, bathed in the flickering glow of flickering fluorescent bulbs, the 'Rusty Spikes' surveyed their latest haul – a mountain of stolen goods ripped off from a shipment meant for a rival casino. The Rusty Spikes were the embodiment of Neon City's underbelly, a gang as cruel and ruthless as a broken bottle in a dark alley."
          content2="Their territory stretched from the grimy docks to the seediest bars, a swathe of Neon City stained with violence and despair. They extorted shopkeepers, ran protection rackets, and dealt in anything from bootleg booze to stolen pharmaceuticals. Their methods were as efficient as they were vicious – a broken kneecap here, a slashed face there, a message scrawled in blood on a rival's door."
          imgClass="abs hover"
        />

        <ThreeCardDisplay
          image1={razorRick}
          image2={twitchyTommy}
          image3={jackals}
          imageAlt1="gang leader"
          imageAlt2="gangster smoking"
          imageAlt3="group of teenage gangsters"
          charDesc1="A hulking brute with a face like a roadmap of past brawls and a heart as cold as a frozen lake. Rick's leadership was based on fear, not charisma. He ruled the Spikes with an iron fist, doling out punishment as freely as he doled out stolen liquor."
          charDesc2="Rick's right-hand, a jittery sadist with a twitch in his eye and a penchant for violence. He enjoyed inflicting pain as much as some folks enjoyed a good jazz solo. Cross him, and you'll be singing a different tune, one that ends with a sour note."
          charDesc3="A pack of feral teenagers, barely out of their teens, that formed the muscle of the Rusty Spikes. These kids were as unpredictable as a rabid dog, their loyalty bought with cheap thrills and fleeting promises of power."
          charName1="'Razor' Rick Ricci:"
          charName2="'Twitch' Tommy Tonelli:"
          charName3="The 'Jackals':"
        />
      </section>
    </div>
  );
};

export default gangs;
