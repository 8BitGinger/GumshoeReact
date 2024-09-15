import lawman from '../../assets/images/lawman.png';
import salMarconi from '../../assets/images/salMarconi.png';
import bettyFranklin from '../../assets/images/bettyFranklin.png';
import smoothEddie from '../../assets/images/smoothEddie.png';
import LeftCard from '../Reuseable/Home/LeftCard';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';

const police = () => {
  return (
    <section className="container" id="police">
      <div>
        <h2>The N.C.P.D. :</h2>

        <LeftCard
          image={lawman}
          content="Entering the Neon City Police Station was like stepping into a film
            noir come to life. It was a place where hope flickered like a dying
            ember, and the only sure thing was the ever-present stain of
            corruption. The badges weren't shiny symbols of justice; they
            were tarnished tokens of a twisted power dynamic. The cops here
            weren't your knight-in-shining-armor heroes, they were more
            like walking question marks with a price tag. Here's a how a
            savvy player, might use or manipulate the laws of Neon City:"
          imageAlt="police officer"
        />

        <ThreeCardDisplay
          image1={salMarconi}
          imageAlt1="sal marconi - the muscle"
          charDesc1="A hulking ex-boxer with fists the size of hams and a brain the size of a pea. Sal's loyalty is as fickle as a roulette wheel, but his strength is undeniable. How to use him: Need someone to shake down a deadbeat gambler or muscle in on a rival operation? Big Sal's your guy (for a hefty fee, of course). He's even been known to muscle the odd cop when the job required. Just be sure you can handle the collateral damage."
          charName1="Sal 'The Muscle' Marconi"
          image2={bettyFranklin}
          imageAlt2="Officer Betty Franklin"
          charDesc2="Sharp as a tack and twice as jaded, Betty's disillusioned with the department's corruption. She leaks information for the right price, but only if it helps bring down the bigger fish. How to use her: Need a heads-up on an upcoming police raid, or intel on a rival gang's operation? Betty can be your inside woman, but tread carefully. Cross her and you'll find yourself facing the full force of the corrupt system she despises."
          charName2="Officer Betty Franklin"
          image3={smoothEddie}
          imageAlt3="Smooth Eddie valentine"
          charDesc3="Eddie's a walking rolodex of dirty cops, corrupt judges, and even seedier informants. He can make a traffic violation disappear faster than a magician pulling a rabbit out of a hat. How to use him: Got a pesky warrant hanging over your head, or need someone to 'disappear' an incriminating piece of evidence Eddie's your man, but be prepared to pay through the nose (and maybe even an alibi or two)"
          charName3="Smooth Eddie Valentine"
        />
      </div>
    </section>
  );
};

export default police;
