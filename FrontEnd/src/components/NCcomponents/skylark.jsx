import auto2 from '../../assets/images/auto2.png';
import blankBack from '../../assets/images/blank-back.png';
import reginaldSkylark from '../../assets/images/reginaldSkylark.png';
import skylarkBuilding from '../../assets/images/skylarkBuilding.png';
import ferrisSkylark from '../../assets/images/ferrisSkylark.png';

const skylark = () => {
  return (
    <div>
      <section className="container" id="skylark">
        <h2>Skylark Tower:</h2>

        <div className="card4 column">
          <div className="text">
            <p>
              Skylark Tower sliced through the Neon City skyline like a gleaming
              chrome dagger. A monument to the Art Deco age, it was a testament
              to both automotive innovation and unbridled ambition. Clad in
              polished turquoise ceramic tiles that shimmered like a
              mermaid&apos;s scales under the neon glow, the tower rose in a
              series of stepped setbacks, each adorned with chrome detailing
              that gleamed like a thousand silver coins stacked against the inky
              night sky. Skylark Tower wasn&apos;t just a building; it was a
              beacon, a symbol of Neon City&apos;s relentless forward motion, a
              glittering promise on the chrome horizon.
            </p>
          </div>
          <div className="rel">
            <img src={blankBack} alt="logo background" />
            <img className="abs shake" src={auto2} alt="car logo" />
          </div>
        </div>

        <div className="container">
          <div className="column">
            <div className="left">
              <img src={reginaldSkylark} alt="Reginald Skylark" />
              <span className="italic bold">Reginald Skylark</span> the man who
              steered Skylark Motors to its current chrome-plated glory. His
              face, a roadmap etched by years of business deals and boardroom
              battles, was framed by a snowy mane of hair and a neatly trimmed
              mustache. His most notable accessory, however, wasn&apos;t a
              flashy watch or a signet ring, but a monocle that perched
              precariously on his eye, a relic from a bygone era.
            </div>
            <div className="middle">
              <img src={skylarkBuilding} alt="Skylark Building" />
              <span className="italic bold">Skylark Tower</span> High above the
              bustling streets, large, slanted windows, trimmed in chrome,
              offered brief glimpses of busy offices where sharp-suited
              executives strategized the future of transportation. This
              wasn&apos;t just a building; it was a beacon, a symbol of Neon
              City&apos;s relentless forward motion, a glittering promise on the
              chrome horizon. <br />*
            </div>
            <div className="right">
              <img src={ferrisSkylark} alt="Ferris Skylark" />
              <span className="italic bold">Ferris Skylark</span> was the living
              embodiment of Skylark Tower&apos;s polished chrome and dazzling
              neon. Young, with a face as smooth as a freshly waxed fender, he
              moved through the city like a high-powered engine, sleek and
              effortlessly powerful. His wardrobe was a parade of bespoke suits,
              each one as meticulously tailored as a Skylark engine, and his
              smile could charm the chrome off a hubcap.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default skylark;
