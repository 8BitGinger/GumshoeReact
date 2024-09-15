import auto2 from '../../assets/images/auto2.png';
import reginaldSkylark from '../../assets/images/reginaldSkylark.png';
import skylarkBuilding from '../../assets/images/skylarkBuilding.png';
import ferrisSkylark from '../../assets/images/ferrisSkylark.png';
import AnimatedCard from '../Reuseable/AnimatedCard';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';

const skylark = () => {
  return (
    <div>
      <section className="container" id="skylark">
        <h2>Skylark Tower:</h2>

        <AnimatedCard
          image={auto2}
          imageAlt="car logo"
          content1="Skylark Tower sliced through the Neon City skyline like a gleaming chrome dagger. A monument to the Art Deco age, it was a testament to both automotive innovation and unbridled ambition. Clad in polished turquoise ceramic tiles that shimmered like a mermaid's scales under the neon glow, the tower rose in a series of stepped setbacks, each adorned with chrome detailing that gleamed like a thousand silver coins stacked against the inky night sky."
          content2="Skylark Tower wasn't just a building; it was a beacon, a symbol of Neon City's relentless forward motion, a glittering promise on the chrome horizon."
          imgClass="abs shake"
        />

        <ThreeCardDisplay
          image1={reginaldSkylark}
          image2={skylarkBuilding}
          image3={ferrisSkylark}
          imageAlt1="Reginald Skylark"
          imageAlt2="Skylark Building"
          imageAlt3="Ferris Skylark"
          charDesc1="Reginald Skylark the man who
              steered Skylark Motors to its current chrome-plated glory. His
              face, a roadmap etched by years of business deals and boardroom
              battles, was framed by a snowy mane of hair and a neatly trimmed
              mustache. His most notable accessory, however, wasn't a
              flashy watch or a signet ring, but a monocle that perched
              precariously on his eye, a relic from a bygone era."
          charDesc2="Skylark Tower High above the

              bustling streets, large, slanted windows, trimmed in chrome,
              offered brief glimpses of busy offices where sharp-suited
              executives strategized the future of transportation. This
              wasn't just a building; it was a beacon, a symbol of Neon
              City's relentless forward motion, a glittering promise on the
              chrome horizon."
          charDesc3="Ferris Skylark was the living
              embodiment of Skylark Tower's polished chrome and dazzling
              neon. Young, with a face as smooth as a freshly waxed fender, he
              moved through the city like a high-powered engine, sleek and
              effortlessly powerful. His wardrobe was a parade of bespoke suits,
              each one as meticulously tailored as a Skylark engine, and his
              smile could charm the chrome off a hubcap."
          charName1="Reginald Skylark:"
          charName2="Skylark Tower:"
          charName3="Ferris Skylark:"
        />
      </section>
    </div>
  );
};

export default skylark;
