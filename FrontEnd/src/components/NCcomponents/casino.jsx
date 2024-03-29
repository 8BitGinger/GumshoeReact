import blankBank from '../../assets/images/blank-back.png';
import casinoWheel from '../../assets/images/casino-wheel.png';
import numbersNorton from '../../assets/images/numbersNorton.png';
import esmereldaDiaz from '../../assets/images/esmereldaDiaz.png';
import luckyMoretti from '../../assets/images/luckyMoretti.png';
import gambling from '../../assets/images/gambling.png';

const casino = () => {
  return (
    <div>
      <section className="container" id="casino">
        <h2>The Casino Block:</h2>

        <div className="card4 column">
          <div className="rel">
            <img src={blankBank} alt="logo background" />
            <img
              id="roulette"
              className="abs spin"
              src={casinoWheel}
              alt="casino wheel"
            />
          </div>
          <div className="text">
            <p>
              The Block, a pulsating heart of artificial light and whispered
              secrets, housed Neon City&apos;s crown jewels – the casinos. Here,
              towering chrome and glass structures, each more opulent than the
              last, jostled for dominance, their neon signs a cacophony of
              clashing colors vying for your attention.
              <br />
              Step through the velvet ropes and enter a world where time melts
              away like a cheap dice roll. Marble floors gleamed under the harsh
              glare of chandeliers, reflecting the desperation and hope
              flickering in the eyes of the patrons. Croupiers, men and women
              with faces as impassive as poker chips, presided over tables
              draped in green felt, their practiced patter a constant white
              noise against the clinking of coins and the whirring of roulette
              wheels.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="column">
            <div className="right">
              <img src={numbersNorton} alt="Numbers Norton" />
              <span className="bold"> &quot;Numbers&quot; Norton: </span> A
              wizened old man with a mind sharper than a broken bottle, Numbers
              isn&apos;t your typical casino patron. He doesn&apos;t gamble, he
              analyzes. Everyone believe Numbers is a genius, others a paranoid
              recluse obsessed with patterns. The truth likely lies somewhere in
              between.
            </div>

            <div className="left">
              <img src={esmereldaDiaz} alt="Esmeralda Diaz" />
              <span className="bold">
                Esmeralda &quot;The Duchess&quot; Diaz:{' '}
              </span>{' '}
              A woman who oozes glamour and danger in equal measure, With a past
              as murky as the bootleg liquor she once peddled, she&apos;s
              climbed the ranks from alluring showgirl to the casino&apos;s
              iron-fisted boss. Esmeralda&apos;s smile can disarm a gunman, but
              her ice-cold stare can freeze a room.
            </div>
            <div className="middle">
              <img src={luckyMoretti} alt="Lucky Luciano Moretti" />
              <span className="bold"> &quot;Lucky&quot; Luciano Moretti: </span>
              A wiry card shark with a grin as crooked as his dice throws, Lucky
              Luciano is a legend in The Block. He first appeared in Neon City
              ten years ago, a penniless drifter with nothing but a deck of
              cards and a gambler&apos;s spirit. He&apos;s gifted, but his
              loyalties lie with himself.
            </div>
          </div>
        </div>

        <article className="card column">
          <p>
            Gambling Can be handled many different ways. Here some approaches I
            have taken:
            <br />
            -Luck Rolls. Base each game, hand, or spin on a Luck roll.
            <br />
            -Casino Game generators. You can use online resources like Casino
            game generators or online card games to simulate the gambling
            experience.
            <br />
            -Real Games. You can actually get a deck of cards out, some dice, or
            even a roulette wheel. The only limit is your imagination
          </p>
          <img src={gambling} alt="gambling" />
        </article>
      </section>
    </div>
  );
};

export default casino;
