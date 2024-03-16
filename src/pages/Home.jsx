import song from '../assets/audio/background2.mp3';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';

function playAudio() {
  const [play, { stop }] = useSound(song, { volume: 0.3 });
  play();
  return stop;
}

function mute() {
  console.log('muted');
}

const Home = () => {
  return (
    <div className="overlay" id="top">
      <section id="intro" className="container intro">
        <h1 className="starter">
          <img
            className="gumshoe"
            src="src/assets/images/document-logo-sepia2.png"
            alt="logo"
            onLoad={playAudio()}
          />
          <br />
          <br />
          <br />
          <span>Neon City </span>

          <span className="date">☆☆☆ June 6, 1936 ☆☆☆</span>
        </h1>
        <section className="headline-container">
          <article className="col3">
            <div className="row-headline">
              <div className="left-headline row">
                <div className="cents">2</div>
                <div className="cents-small">¢</div>
              </div>
              <div className="middle-headline">
                <p>The Mirror</p>
              </div>
              <div className="right-headline">
                <p className="news">FINAL</p>
              </div>
            </div>
            <div className="headline-title">
              <h5>EXTRA! EXTRA! READ ALL ABOUT IT</h5>
            </div>
            <div className="headline-subtitle">
              <h4>
                Neon Nightmare! Tinseltown Wannabe Steals Stars, Loses Soul!
              </h4>
            </div>
            <p className="headline">
              <span className="wrap" alt="casino interior hand-drawn"></span>
              &quot; This dame, Neon City, she shines brighter than a dozen
              interrogation lamps, but beneath that glitz and glamour,
              there&apos;s a darkness thicker than a week-old cigar. <br />
              <br />
              Yeah, the night sky&apos;s a canvas for a million neon signs, and
              the air thrums with music that&apos;d make a saint tap a foot. But
              listen closer, and you hear the clink of bootleg liquor glasses in
              speakeasies tucked away in forgotten alleys.
              <br />
              <br />
              Burlesque halls and opium dens offer their own kind of escape, the
              fast kind that leaves you hollowed out and wanting more. And if
              you manage to steer clear of those temptations, you still gotta
              face The Block.
              <br />
              <br />
              Towers of sin, practically touching, each room a portal to a
              different kind of vice. Gambling, girls, shows you wouldn&apos;t
              believe. They call it a marvel of modern society, but it&apos;s a
              monument to mankind&apos;s darkest desires.
              <br />
              <br />
              Neon City&apos;s underbelly, it ain&apos;t just about this town,
              see? It&apos;s a reflection of somethin&apos; deeper,
              somethin&apos; that lurks in all of us, waiting for the right
              moment to slither out.&quot;
            </p>
            <div className="row2 welcome">
              <img src="src/assets/images/reporter.png" alt="reporter" />
              <h4 className="italic">
                -Harvey Stietz <br />
                <span className="sub-title2">Hollywoodland Mirror</span>
              </h4>
            </div>
          </article>
        </section>
        <h1 className="column">
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          The Story
        </h1>
        <article className="column">
          <img src="src/assets/images/postcard-main.jpg" alt="postcard" />
          Rain hammered the grimy windowpane, blurring the neon symphony outside
          into a watercolor of sin. The dame in the red dress had been gone for
          five years, swallowed by something from the sky. Or so I thought. The
          postcard, yellowed with age and travel, was a tangible ghost: her
          familiar scrawl whispering promises from a city that shimmered with
          both chrome and sleaze - Neon City, a city of glitz and vice carved
          from the rocky coast. A city that had swallowed men whole.
        </article>
        <article className="column">
          But whispers tell of her murder – a death she seem to have cheated
          once before, somehow, but couldn&apos;t again. Now, amidst the crooked
          cops and ruthless gangsters of this 1930s underworld, you arrive to
          find yourself entangled in a mystery far stranger than you imagined.
          Secret agents from the clandestine Penrose Division,
          prohibition-flouting speakeasies, and the seductive thrum of jazz
          clubs form the backdrop of your search for the truth about who killed
          your lover and the identity of the mysterious agents following you.
          <img src="src/assets/images/frank.jpg" alt="neon city scene" />
        </article>
        <article className="column">
          <img src="src/assets/images/neoncity2.jpg" alt="neon city scene" />
          But even the city&apos;s dazzling lights can&apos;t mask the dark
          secrets it holds. Your only hope seems to be Frank Hodgkins, a haggard
          and perpetually-drunk detective with a gruff exterior and a
          surprisingly noble sense of morality. Though his cynicism runs deep,
          the glint of determination in his bloodshot eyes hints at a past that
          fuels his refusal to turn a blind eye to the city&apos;s corruption.
        </article>

        <article className="column">
          You will be pursued by Agents of the Mysterious Penrose Division of
          the FBI. Their goals and interests unknown, they seem to be stalking
          your every move. They are a force to be reckoned with and will stop at
          nothing to keep you from uncovering the truth.
          <img src="src/assets/images/agents2.jpg" alt="penrose agents" />
        </article>
        <article className="column">
          <img
            src="src/assets/images/alien-invasion.jpg"
            alt="skyline of alien invasion with man staring in distance"
          />
          Together, you&apos;ll navigate the neon-drenched labyrinth, armed with
          your wits, a flicker of impossible hope, and the unlikely alliance of
          a washed-up detective and a fiery songbird, all to unravel a
          conspiracy that twists the very fabric of reality. <br />
          <br />
          This is Gumshoe the Role Playing Game!
        </article>
      </section>

      <section className="graphics">
        <div className="container-photo">
          <img src="src/assets/images/clues.jpg" alt="clues" />
          <h3>Search for Clues in Neon City</h3>
        </div>
        <div className="container-photo">
          <img src="src/assets/images/gangsters.jpg" alt="clues" />
          <h3>Dodge Gangsters and Crooked Cops</h3>
        </div>

        <div className="container-photo">
          <img src="src/assets/images/mystery.jpg" alt="clues" />
          <h3>Solve a mystery that&apos;s out of this world!</h3>
        </div>
      </section>

      <section className="container instructions">
        <h1>
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          How to Play
        </h1>
        <h3>
          Check the{' '}
          <a id="mystery" href="#downloads">
            Downloads Section
          </a>
          <br />
          for Character Sheet
        </h3>
        <article className="column avatar">
          <img src="src/assets/images/dame.jpg" alt="car driving in city" />
          Rain slicked the neon-drenched streets of Neon City, reflecting the
          city's seedy underbelly in a distorted kaleidoscope. In this concrete
          jungle, the only warmth came from the cheap whiskey swirling in your
          glass.
          <br />
          <br />
          Gumshoe Neon City, the dame whispered, tracing a fingertip across the
          condensation on the glass. &quot;A role-playing game for you and your
          pals, she purred.&quot; One of you, the grizzled storyteller, sets the
          scene, weaving a web of lies and secrets as thick as the fog rolling
          off the docks. The rest of you, hardened gumshoes with more scars than
          morals, step into the neon-lit shadows, chasing phantoms and buried
          truths.
        </article>
        <article className="column avatar">
          Every choice you make ripples through the story, twisting the
          narrative like a bullet ricocheting off a mirrored wall. Encounters
          with shifty molls and two-bit thugs test your mettle. Cryptic clues,
          buried deep in the city's underbelly, whisper of a conspiracy bigger
          than your wildest dreams.
          <br />
          <br />
          The dame's death, once a closed case, now bleeds suspicion. Was she
          really dead? Or was she just another pawn in a game you didn't even
          know you were playing? Neon City holds more secrets than a
          double-breasted trench coat has pockets, and you'll need all your
          wits, brawn, and maybe a good dame on your side to survive its dark
          embrace. <br />
          <br />
          So grab your fedora, slug down the rest of that whiskey, and step into
          the neon abyss. The clock's ticking, gumshoe. And in Neon City, time
          is measured in bullets.
          <img src="src/assets/images/fedora.jpg" alt="man in fedora" />
        </article>
        <article className="row4">
          <p className="role">
            <span className="row big">⚜</span>

            <span className="list column sub-title">Choose a Role:</span>
            <span className="list column">StoryTeller</span>
            <span className="list column">Player</span>
          </p>
          <p className="role">
            <span className="row big">⚜</span>
            <span className="sub-title list column">Necessary Resources:</span>
            <span className="list column">Character Sheet & Pencil</span>
            <span className="list column">Standard RPG Dice</span>
            <span className="list column">Your Imagination!</span>
          </p>
        </article>
      </section>

      <section className="container">
        <h1>
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          Players
        </h1>
        <h3>
          Players <Link to="/player">Click Here</Link>
        </h3>
        <article className="column avatar">
          <img src="src/assets/images/players.jpg" alt="guy with gun" />
          Neon City ain't a place for the nameless, partner. Before you even set
          foot in this concrete jungle, you gotta craft your own legend. Name,
          className, and the dirty details of your past. You could be a hardened
          Hardboiled Detective, a relic from a bygone era with a trench coat as
          worn as your soul. Maybe you're a slick Gangster, your silver tongue
          sharper than any blade. Or perhaps you're a struggling talented
          Musician, navigating the city's underbelly with the soul of a poet.
          <br />
          <br />
          So, craft your legend wisely, because in Neon City, your reputation
          can precede you.
          <br />
          <br />
          See more on the Players page!
        </article>
      </section>

      <section className="container">
        <h1>
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          StoryTellers
        </h1>
        <h3>
          StoryTellers
          <br></br>
          <Link to="/storyTeller">Info Alley</Link>
          <br></br>
          <Link to="/neonCity">Hit the Streets</Link>
        </h3>

        <article className="column avatar">
          <img
            src="src/assets/images/storyteller.jpg"
            alt="sketch of noir man with hat"
          />
          In the grand game of mystery, you, the Story Teller, are the puppet
          master, weaving a web of intrigue for your players to unravel. You are
          an artist sketching the world around them and making the characters
          come to life. But like a good poker dealer, you gotta keep your cards
          close. Scatter clues like breadcrumbs through the shadowed alleys and
          smoke-filled rooms of your narrative. Finding the right balance is a
          tightrope walk. Too easy, and your players get bored, the case
          cracking with a yawn instead of a bang. Too cryptic, and they're left
          flailing in the dark, the frustration thicker than week-old cigar
          smoke.
        </article>
      </section>

      <section className="container" id="downloads">
        <h1>
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          Downloads and Resources
        </h1>
        <article className="column">
          Got a new pair of gumshoes for your next Neon City adventure? <br />
          <br />
          Welcome to a hidden alleyway chock full of essential gear. Here you'll
          find character sheets, crisp and clean, ready to be filled with the
          grit and grime of your player's persona. And a Starter Adventure to
          get you and your crew started on your first case. <br />
          <br />
          So, don't be a flatfoot, partner. Gear up, fuel the narrative
          firepower, and get ready to dive back into adventure and the neon
          abyss.
          <span className="col skew">
            <img
              className="avatar3"
              src="src/assets/images/gear.png"
              alt="1930s gear"
            />

            <a href="src/assets/downloads/NeonCity-CharSheet.pdf" download>
              ✓ Character Sheet
            </a>

            <a
              href="src/assets/downloads/NeonCity-StarterAdventure.pdf"
              download
            >
              ✓ Starter Adventure
            </a>
          </span>
        </article>
      </section>

      <section className="container">
        <h1>
          <img
            id="page-top"
            className="page-top"
            src="src/assets/images/penrosev1.png"
            alt="penrose triangle"
          />
          The Developer
        </h1>
        <h3>
          View My Portfolio
          <a
            target="_blank"
            id="playerLink"
            href="https://ryanfann.netlify.app/"
          >
            Click here
          </a>
        </h3>
        <section className="column">
          <div className="col dev-text">
            <div className="row2">
              <img
                src="src/assets/images/dev-avatar.png"
                alt="developer avatar"
              />

              <p>
                I'm{' '}
                <span className="subtitle2">Ryan Fann, the 8BitGinger,</span> a
                full-stack developer with a passion for creating immersive,
                interactive experiences.
                <br />
                <br />
                I specialize in web development, game/graphic design, and
                digital storytelling. <br />
                <br />
                My goal is to create engaging, user-friendly applications that
                bring people together and spark their imagination. <br />
                <br />
                <a href="mailto:ryan.fann@gmail.com">Let's chat!</a>
              </p>
            </div>
            <br />
            <div className="row subtitle2">
              <a target="_blank" href="https://github.com/8BitGinger/">
                <i className="big fa-brands fa-github"></i>
              </a>
              <a target="_blank" href="https://ryanfann.netlify.app">
                <i className="big fa-solid fa-briefcase"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ryanfanntastic/"
              >
                <i className="big fa-brands fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://www.facebook.com/ryanfann">
                <i className="big fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </section>
      </section>
      <div className="mute" id="mute">
        <img
          onClick={mute}
          src="src/assets/images/mute-icon.png"
          alt="gramophone mute"
        />
      </div>
    </div>
  );
};

export default Home;
