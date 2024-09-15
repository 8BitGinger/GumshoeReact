import jazz2 from '../../assets/images/jazz2.png';
import popsJohnson from '../../assets/images/popsJohnson.png';
import rustyTrombonePic from '../../assets/images/rustyTrombone.png';
import band from '../../assets/images/band.png';
import AnimatedCard from '../Reuseable/AnimatedCard';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';

const rustyTrombone = () => {
  return (
    <div>
      <section className="container" id="jazz">
        <h2>The Squeaky Saxophone:</h2>

        <AnimatedCard
          image={jazz2}
          imageAlt="jazz logo"
          content1="The club itself was a relic, a two-story building with peeling paint and a rickety fire escape clinging to its side like a forgotten dream. Inside, the air hung thick with the ghosts of past performances"
          content2=" – the lingering scent of stale beer, cigarette smoke, and the faintest echo of a saxophones's wail. Dimly lit by flickering bulbs and mismatched lampshades, the walls were adorned with faded photographs of long-gone jazz legends, their faces etched with the bittersweet beauty of a life lived on the edge of a melody."
          imgClass="abs float"
        />

        <ThreeCardDisplay
          image1={popsJohnson}
          image2={rustyTrombonePic}
          image3={band}
          imageAlt1="Pops Johnson"
          imageAlt2="The Squeaky Saxophone Jazz Club"
          imageAlt3="Smoky Joe Miller Band"
          charDesc1="'Pops' Johnson, the owner,
             a gruff man with a heart as worn as the piano keys on stage. He
           knew everyone who shuffled through – the heartbroken saxophonist
              drowning his sorrows, the aspiring singer with a voice as raw as a
            diamond in the rough, and the occasional shady figure with a taste
              for the blues and a secret to keep hidden."
          charDesc2="The Squeaky Saxophone was a relic, a
               The building wasn't much to look at and sometimes, the
               patrons were the same, but at this Jazz Club there is more than
             meets the eye. Inside the Players can perform for tips, get
              information about the underbelly, enjoy a nice drink, or even get
              hired for a job."
          charDesc3="'Smoky' Joe's Ragtime Renegades,
              
             occupies the dimly lit stage most nights. They were a ragtag band
              of veterans who poured their hearts and struggles into every note.
            Joe was a wiry man with a perpetually ash-stained face and a voice
             as raspy as a rusty hinge. He'd seen it all, and made it into
             song!"
          charName1={'Pops Johnson'}
          charName2={'The Squeaky Saxophone Jazz Club'}
          charName3={'Smoky Joe Miller Band'}
        />
      </section>
    </div>
  );
};

export default rustyTrombone;
