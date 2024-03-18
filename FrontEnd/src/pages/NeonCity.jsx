import Police from '../components/NCcomponents/police.jsx';
import Penrose from '../components/NCcomponents/penrose.jsx';

const NeonCity = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1 id="top-neon">
          <img
            id="iconST"
            className="page-top spin"
            src="src/assets/images/penrosev1.png"
          />
          Neon City and
          <br />
          The World of Gumshoe:
        </h1>

        <Police />
        <Penrose />

        <h2>The Gangs:</h2>

        <article className="card column">
          <img src="src/assets/images/gangs.png" alt="gang logo" />
          The stench of stale sweat and fear clung to the abandoned warehouse
          like a second skin. Here, bathed in the flickering glow of flickering
          fluorescent bulbs, the &quot;Rusty Spikes&quot; surveyed their latest
          haul – a mountain of stolen goods ripped off from a shipment meant for
          a rival casino. The Rusty Spikes were the embodiment of Neon
          City&apos;s underbelly, a gang as cruel and ruthless as a broken
          bottle in a dark alley.
          <br />
          Their territory stretched from the grimy docks to the seediest bars, a
          swathe of Neon City stained with violence and despair. They extorted
          shopkeepers, ran protection rackets, and dealt in anything from
          bootleg booze to stolen pharmaceuticals. Their methods were as
          efficient as they were vicious – a broken kneecap here, a slashed face
          there, a message scrawled in blood on a rival&apos;s door.
        </article>

        <div className="container">
          <div className="column">
            <div className="left">
              <img src="src/assets/images/razorRick.png" alt="gang leader" />
              &quot;Razor&quot; Rick Ricci: A hulking brute with a face like a
              roadmap of past brawls and a heart as cold as a frozen lake.
              Rick&apos;s leadership was based on fear, not charisma. He ruled
              the Spikes with an iron fist, doling out punishment as freely as
              he doled out stolen liquor.
              <br />*
            </div>

            <div className="middle">
              <img
                src="src/assets/images/twitchyTommy.png"
                alt="gangster smoking"
              />
              &quot;Twitch&quot; Tommy Tonelli: Rick&apos;s right-hand man, a
              jittery sadist with a twitch in his eye and a penchant for
              violence. He enjoyed inflicting pain as much as some folks enjoyed
              a good jazz solo. Cross him, and you&apos;ll be singing a
              different tune, one that ends with a sour note.
            </div>
            <div className="right">
              <img
                src="src/assets/images/jackals.png"
                alt="group of teenage gangsters"
              />
              The &quot;Jackals&quot;: A pack of feral teenagers, barely out of
              their teens, that formed the muscle of the Rusty Spikes. These
              kids were as unpredictable as a rabid dog, their loyalty bought
              with cheap thrills and fleeting promises of power.
              <br />*
            </div>
          </div>
        </div>

        <h2>Skylark Tower:</h2>

        <article className="card column">
          Skylark Tower sliced through the Neon City skyline like a gleaming
          chrome dagger. A monument to the Art Deco age, it was a testament to
          both automotive innovation and unbridled ambition. Clad in polished
          turquoise ceramic tiles that shimmered like a mermaid&apos;s scales
          under the neon glow, the tower rose in a series of stepped setbacks,
          each adorned with chrome detailing that gleamed like a thousand silver
          coins stacked against the inky night sky. Skylark Tower wasn&apos;t
          just a building; it was a beacon, a symbol of Neon City&apos;s
          relentless forward motion, a glittering promise on the chrome horizon.
          <img src="src/assets/images/auto.png" alt="car logo" />
        </article>

        <div className="container">
          <div className="column">
            <div className="left">
              <img
                src="src/assets/images/reginaldSkylark.png"
                alt="Reginald Skylark"
              />
              Reginald Skylark, the man who steered Skylark Motors to its
              current chrome-plated glory. His face, a roadmap etched by years
              of business deals and boardroom battles, was framed by a snowy
              mane of hair and a neatly trimmed mustache. His most notable
              accessory, however, wasn&apos;t a flashy watch or a signet ring,
              but a monocle that perched precariously on his eye, a relic from a
              bygone era.
            </div>

            <div className="middle">
              <img
                src="src/assets/images/skylarkBuilding.png"
                alt="Skylark Building"
              />
              High above the bustling streets, large, slanted windows, trimmed
              in chrome, offered brief glimpses of busy offices where
              sharp-suited executives strategized the future of transportation.
              Skylark Tower wasn&apos;t just a building; it was a beacon, a
              symbol of Neon City&apos;s relentless forward motion, a glittering
              promise on the chrome horizon.
              <br />*
            </div>
            <div className="right">
              <img
                src="src/assets/images/ferrisSkylark.png"
                alt="Ferris Skylark"
              />
              Ferris Skylark was the living embodiment of Skylark Tower&apos;s
              polished chrome and dazzling neon. Young, with a face as smooth as
              a freshly waxed fender, he moved through the city like a
              high-powered engine, sleek and effortlessly powerful. His wardrobe
              was a parade of bespoke suits, each one as meticulously tailored
              as a Skylark engine, and his smile could charm the chrome off a
              hubcap.
            </div>
          </div>
        </div>

        <h2>The Casino Block:</h2>

        <div className="card4 column">
          <div className="rel">
            <img src="src/assets/images/blank-back.png" alt="logo background" />
            <img
              id="roulette"
              className="abs"
              src="src/assets/images/casino-wheel.png"
              alt="casino wheel"
            />
          </div>
          <div className="text">
            The Block, a pulsating heart of artificial light and whispered
            secrets, housed Neon City&apos;s crown jewels – the casinos. Here,
            towering chrome and glass structures, each more opulent than the
            last, jostled for dominance, their neon signs a cacophony of
            clashing colors vying for your attention.
            <br />
            <br />
            Step through the velvet ropes and enter a world where time melts
            away like a cheap dice roll. Marble floors gleamed under the harsh
            glare of chandeliers, reflecting the desperation and hope flickering
            in the eyes of the patrons. Croupiers, men and women with faces as
            impassive as poker chips, presided over tables draped in green felt,
            their practiced patter a constant white noise against the clinking
            of coins and the whirring of roulette wheels.
          </div>
        </div>

        <div className="container">
          <div className="column">
            <div className="right">
              <img
                src="src/assets/images/numbersNorton.png"
                alt="Numbers Norton"
              />
              &quot;Numbers&quot; Norton: A wizened old man with a mind sharper
              than a broken bottle, Numbers isn&apos;t your typical casino
              patron. He doesn&apos;t gamble, he analyzes. Everyone believe
              Numbers is a genius, others a paranoid recluse obsessed with
              patterns. The truth likely lies somewhere in between.
            </div>
            <div className="left">
              <img
                src="src/assets/images/esmereldaDiaz.png"
                alt="Esmeralda Diaz"
              />
              Esmeralda &quot;The Duchess&quot; Diaz: A woman who oozes glamour
              and danger in equal measure, With a past as murky as the bootleg
              liquor she once peddled, she&apos;s climbed the ranks from
              alluring showgirl to the casino&apos;s iron-fisted boss.
              Esmeralda&apos;s smile can disarm a gunman, but her ice-cold stare
              can freeze a room.
            </div>

            <div className="middle">
              <img
                src="src/assets/images/luckyMoretti.png"
                alt="Lucky Luciano Moretti"
              />
              &quot;Lucky&quot; Luciano Moretti: A wiry card shark with a grin
              as crooked as his dice throws, Lucky Luciano is a legend in The
              Block. He first appeared in Neon City ten years ago, a penniless
              drifter with nothing but a deck of cards and a gambler&apos;s
              spirit. He&apos;s gifted, but his loyalties lie with himself.
            </div>
          </div>
        </div>

        <article className="card column">
          <img src="src/assets/images/gambling.png" alt="gambling" />
          Gambling Can be handled many different ways. Here some approaches I
          have taken:
          <br />
          <br />
          -Luck Rolls. Base each game, hand, or spin on a Luck roll.
          <br />
          <br />
          -Casino Game generators. You can use online resources like Casino game
          generators or online card games to simulate the gambling experience.
          <br />
          <br />
          -Real Games. You can actually get a deck of cards out, some dice, or
          even a roulette wheel. The only limit is your imagination
        </article>

        <h2>The Rusty Saxophone:</h2>

        <article className="card column">
          The Rusty Saxophone
          <br />
          <br />
          The club itself was a relic, a two-story building with peeling paint
          and a rickety fire escape clinging to its side like a forgotten dream.
          Inside, the air hung thick with the ghosts of past performances – the
          lingering scent of stale beer, cigarette smoke, and the faintest echo
          of a saxophones&apos;s wail. Dimly lit by flickering bulbs and
          mismatched lampshades, the walls were adorned with faded photographs
          of long-gone jazz legends, their faces etched with the bittersweet
          beauty of a life lived on the edge of a melody.
          <img src="src/assets/images/jazz.png" alt="jazz logo" />
        </article>

        <div className="container">
          <div className="column">
            <div className="left">
              <img src="src/assets/images/popsJohnson.png" alt="pops johnson" />
              &quot;Pops&quot; Johnson, the owner, a gruff man with a heart as
              worn as the piano keys on stage. He knew everyone who shuffled
              through – the heartbroken saxophonist drowning his sorrows, the
              aspiring singer with a voice as raw as a diamond in the rough, and
              the occasional shady figure with a taste for the blues and a
              secret to keep hidden.
            </div>

            <div className="middle">
              <img
                src="src/assets/images/rustyTrombone.png"
                alt="The Rusty Trombone Jazz Club"
              />
              The club itself was a relic, a two-story building with peeling
              paint and a rickety fire escape clinging to its side like a
              forgotten dream. Dimly lit by flickering bulbs and mismatched
              lampshades, the walls were adorned with faded photographs of
              long-gone jazz legends, their faces etched with the bittersweet
              beauty of a life lived on the edge of a melody.
            </div>
            <div className="right">
              <img
                src="src/assets/images/band.png"
                alt="Smoky Joe Miller Band"
              />
              Occupying the dimly lit stage of the Rusty Trombone most nights
              was &quot;Smoky&quot; Joe Miller&apos;s Ragtime Renegades, a
              ragtag band of veterans who poured their hearts and struggles into
              every note.The band&apos;s namesake, Joe was a wiry man with a
              perpetually ash-stained face and a voice as raspy as a rusty
              hinge. He&apos;d seen it all, and made it into song!
            </div>
          </div>
        </div>

        <h2>The Harbor:</h2>

        <article className="card column">
          <img src="src/assets/images/anchor.png" alt="harbor logo" />
          Here, the neon lights that bled into the night sky above met their
          watery demise, staining the oily surface with a fractured reflection
          of the city&apos;s decadence. Rusted cranes, like skeletal giants,
          reached for the polluted sky, while grimy freighters belched plumes of
          black smoke, a stark counterpoint to the dazzling skyline. This was a
          place where the salt-laced breeze carried the tang of adventure, the
          clang of industry, where the whispers of a thousand shady deals struck
          in the shadows of towering cargo containers and the unsettling
          suspicion that many an unlucky soul had found a permanent resting
          place beneath the harbor&apos;s oily sheen.
        </article>

        <div className="container">
          <div className="column">
            <div className="middle">
              <img
                src="src/assets/images/harborSingle.png"
                alt="man in trench-coat overlooking harbor"
              />
              The docks themselves were a haven for those who operated on the
              fringes. Gruff longshoremen, their muscles knotted from years of
              back-breaking labor, unloaded cargo with a practiced indifference,
              their eyes always scanning for opportunities to skim. Shady
              figures, perpetually n shadows, lurked in warehouses brimming with
              exotic goods and questionable merchandise. Here, deals were struck
              with handshakes and terse nods, loyalty as fleeting as the ocean
              currents.
            </div>
            <div className="right">
              <img
                src="src/assets/images/carGoods.png"
                alt="classNameic sports car"
              />
              Under the watchful eyes of rusted cranes and the oily sheen of the
              water, a black market thrived. Stacks of uncut diamonds glittered
              like fallen stars, their brilliance a stark contrast to the dull
              gleam of pilfered weapons. And tucked away in a shadowed corner,
              shrouded in an oily tarp, might lie the ultimate prize – a
              gleaming Skylark automobile, fresh off a freighter and ready to
              disappear into the neon labyrinth of the city.
              <br />*
            </div>

            <div className="left">
              <img
                src="src/assets/images/captainCutlass.png"
                alt="captain cutlass"
              />
              Captain Kim commands the &quot;Full Moon,&quot; a rickety
              freighter that reeked more of fish and desperation than luxury.
              Rumors swirled about her past, whispers of a pirate captain on a
              hidden sea, though Kim herself remained tight-lipped, her only
              confidante a talking parrot with a vocabulary as foul as the
              harbor itself. The only constant about Kim was a silver amulet
              that dangled from her neck, its inscription an enigma even to the
              most skilled codebreakers.
            </div>
          </div>
        </div>

        <article className="card column">
          Neon City&apos;s harbor pulsed with a life all its own. Here, the
          rhythmic clang of industry mingled with the salty tang of the sea, a
          stark contrast to the neon symphony above. Shady deals went down under
          the watchful gaze of rusted cranes, whispers carried on the
          ever-present breeze. Players with a knack for thievery could mingle
          with dockworkers, their pockets potentially lined with pilfered goods
          Captain Kim might &quot;accidentally&quot; overlook if the price was
          right. Need a place to lay low after a messy heist? The rickety
          taverns lining the docks offered a temporary haven, a place to
          disappear into the anonymity of the harbor&apos;s underbelly for a
          price, of course. But remember, in Neon City&apos;s harbor, every
          shadow hides a secret, and every corner whispers a story. Just be
          careful which ones you choose to listen to.
          <img src="src/assets/images/harbor.png" alt="harbor" />
        </article>

        <h2>The Starlite Motel:</h2>

        <article className="card column">
          <img
            src="src/assets/images/starlite.png"
            alt="Handsome Bob and Daughter Adriana"
          />
          Unlike its flashy cousins downtown, the Starlite wasn&apos;t a beacon
          of dazzling lights. Its faded neon sign, a lonely astronaut holding a
          flickering star, cast an ethereal glow on the peeling turquoise paint.
          Inside, the air hung thick with the scent of stale coffee and
          something that vaguely resembled disinfectant.
          <br />
          <br />
          Run by the smiling man Handsome Bob and his constant companion, his
          daughter, Adriana. Barely a pre-teen, she possessed a wisdom beyond
          her years. Her dark eyes held a spark of defiance, a reminder of the
          struggles they&apos;d faced together. She kept the Starlite running
          with a quiet efficiency.
          <br />
          <br />
          The Starlite Motel wasn&apos;t glamorous, but it offered a flicker of
          solace, shimmering faintly like the lonely star on the motel&apos;s
          faded sign.
        </article>

        <h2>The End?:</h2>

        <article className="card column">
          <p>
            Use what you learned. The grime, the grit, the shadows in those
            alleys - weave it all into a new yarn. A mystery so twisted
            it&apos;ll leave your players sweatin&apos; and thinkin&apos; long
            after the bar tab&apos;s settled. You&apos;re the puppet master,
            kid, tugging at their strings, leading them deeper into the rabbit
            hole. Remember, the real adventure starts now.
          </p>
          <img
            src="src/assets/images/lonely-noir.jpg"
            alt="walking alone in the city"
          />
        </article>

        <div className="row5">
          <div className="btn-holder-left">
            <a href="./storyteller.html">
              <button id="topBtn" className="btn btn3">
                Go Back
              </button>
            </a>
          </div>
          <div className="btn-holder-right upside-down">
            <a href="./app.html">
              <button id="topBtn" className="btn upside-down btn3">
                Go Home
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeonCity;
