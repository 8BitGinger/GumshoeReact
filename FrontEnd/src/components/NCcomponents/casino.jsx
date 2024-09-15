import casinoWheel from '../../assets/images/casino-wheel.png';
import numbersNorton from '../../assets/images/numbersNorton.png';
import esmereldaDiaz from '../../assets/images/esmereldaDiaz.png';
import luckyMoretti from '../../assets/images/luckyMoretti.png';
import gambling from '../../assets/images/gambling.png';
import AnimatedCard from '../Reuseable/AnimatedCard';
import ThreeCardDisplay from '../Reuseable/Home/ThreeCardDisplay';
import BulletCardPicRight from '../Reuseable/Home/BulletCardPicRight';

const casino = () => {
  return (
    <div>
      <section className="container" id="casino">
        <h2>The Casino Block:</h2>
        <AnimatedCard
          image={casinoWheel}
          imageAlt="casino wheel"
          content1="The Block, a pulsating heart of artificial light and whispered secrets, housed Neon City's crown jewels – the casinos. Here, towering chrome and glass structures, each more opulent than the last, jostled for dominance, their neon signs a cacophony of clashing colors vying for your attention."
          content2="Step through the velvet ropes and enter a world where time melts away like a cheap dice roll. Marble floors gleamed under the harsh glare of chandeliers, reflecting the desperation and hope flickering in the eyes of the patrons. Croupiers presided over tables draped in green felt, their practiced patter a constant white noise against the clinking of coins and the whirring of roulette wheels."
          imgClass="abs spin"
        />
        <h2>The Casino&apos;s Denizens:</h2>
        <ThreeCardDisplay
          image1={numbersNorton}
          image2={esmereldaDiaz}
          image3={luckyMoretti}
          imageAlt1="Numbers Norton"
          imageAlt2="Esmeralda Diaz"
          imageAlt3="Lucky Luciano Moretti"
          charDesc1="A wizened old man with a mind sharper than a
              broken bottle, Numbers isn't your typical casino patron. He
              doesn't gamble, he analyzes. Everyone believe Numbers is a genius,
              others a paranoid recluse obsessed with patterns. The truth likely
              lies somewhere in between."
          charDesc2="A
              woman who oozes glamour and danger in equal measure, With a past
              as murky as the bootleg liquor she once peddled, she's climbed the
              ranks from alluring showgirl to the casino's iron-fisted boss.
              Esmeralda's smile can disarm a gunman, but her ice-cold stare can
              freeze a room."
          charDesc3="A wiry
              card shark with a grin as crooked as his dice throws, Lucky
              Luciano is a legend in The Block. He first appeared in Neon City
              ten years ago, a penniless drifter with nothing but a deck of
              cards and a gambler's spirit. He's gifted, but his loyalties lie
              with himself."
          charName1={'Numbers Norton'}
          charName2={'Esmeralda Diaz'}
          charName3={'Lucky Luciano Moretti'}
        />

        <BulletCardPicRight
          content={[
            'Gambling Can be handled many different ways. Here some approaches I have taken',
            'Luck Rolls. Base each game, hand, or spin on a Luck roll.',
            'Casino Game generators. You can use online resources like Casino game generators or online card games to simulate the gambling experience.',
            'Real Games. You can actually get a deck of cards out, some dice, or even a roulette wheel. The only limit is your imagination',
          ]}
          image={gambling}
          imgAlt="gambler sitting at card table"
        />
      </section>
    </div>
  );
};

export default casino;
