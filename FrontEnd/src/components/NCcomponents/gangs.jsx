import blankBack from '../../assets/images/blank-back.png';
import gangs2 from '../../assets/images/gangs2.png';
import razorRick from '../../assets/images/razorRick.png';
import twitchyTommy from '../../assets/images/twitchyTommy.png';
import jackals from '../../assets/images/jackals.png';

const gangs = () => {
  return (
    <div>
      <section className="container" id="gangs">
        <h2>The Gangs:</h2>

        <div className="card4 column">
          <div className="rel">
            <img src={blankBack} alt="logo background" />
            <img
              id="gang"
              className="abs hover"
              src={gangs2}
              alt="fist with chain logo"
            />
          </div>
          <div className="text">
            <p>
              The stench of stale sweat and fear clung to the abandoned
              warehouse like a second skin. Here, bathed in the flickering glow
              of flickering fluorescent bulbs, the &quot;Rusty Spikes&quot;
              surveyed their latest haul – a mountain of stolen goods ripped off
              from a shipment meant for a rival casino. The Rusty Spikes were
              the embodiment of Neon City&apos;s underbelly, a gang as cruel and
              ruthless as a broken bottle in a dark alley.
              <br />
              Their territory stretched from the grimy docks to the seediest
              bars, a swathe of Neon City stained with violence and despair.
              They extorted shopkeepers, ran protection rackets, and dealt in
              anything from bootleg booze to stolen pharmaceuticals. Their
              methods were as efficient as they were vicious – a broken kneecap
              here, a slashed face there, a message scrawled in blood on a
              rival&apos;s door.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="column">
            <div className="left">
              <img src={razorRick} alt="gang leader" />
              <span className="italic bold">
                &quot;Razor&quot; Rick Ricci:
              </span>{' '}
              A hulking brute with a face like a roadmap of past brawls and a
              heart as cold as a frozen lake. Rick&apos;s leadership was based
              on fear, not charisma. He ruled the Spikes with an iron fist,
              doling out punishment as freely as he doled out stolen liquor.
              <br />
            </div>

            <div className="middle">
              <img src={twitchyTommy} alt="gangster smoking" />
              <span className="italic bold">
                &quot;Twitch&quot; Tommy Tonelli:
              </span>{' '}
              Rick&apos;s right-hand man, a jittery sadist with a twitch in his
              eye and a penchant for violence. He enjoyed inflicting pain as
              much as some folks enjoyed a good jazz solo. Cross him, and
              you&apos;ll be singing a different tune, one that ends with a sour
              note.
            </div>
            <div className="right">
              <img src={jackals} alt="group of teenage gangsters" />
              <span className="italic bold">The &quot;Jackals&quot;:</span> A
              pack of feral teenagers, barely out of their teens, that formed
              the muscle of the Rusty Spikes. These kids were as unpredictable
              as a rabid dog, their loyalty bought with cheap thrills and
              fleeting promises of power.
              <br />*
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default gangs;
