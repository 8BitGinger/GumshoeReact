import ClueP from './cluePrinciples';

const clues = () => {
  return (
    <section>
      <h3 id="clues">Clues</h3>
      <article className="card column">
        <p>
          The key is knowing your audience. Seasoned gumshoes can sniff out a
          red herring from a mile away, so you gotta get creative with your
          misdirection. Plant false leads that shimmer with possibility, dead
          ends that feel tantalizingly close to the truth. But remember,
          there&apos;s a fine line between challenge and confusion. A good
          mystery is a puzzle, not an enigma. So, dole out the clues with a
          steady hand, whispers in the night, a cryptic inscription on a
          crumpled matchbook. Let your players connect the dots, their
          &quot;Aha!&quot; moments sweeter for the struggle.
        </p>
        <img src="src/assets/images/audience.jpg" alt="group of citizens" />
      </article>

      <article className="card column italic">
        <p>
          Because in the end, the thrill of the chase is half the fun. Just make
          sure they have enough moonlight to follow the trail, but not enough to
          see the whole picture at once. That&apos;s where the real magic
          happens, in the shadowy space between knowing and not knowing, where
          your players become detectives, not just pawns on your twisted game
          board.
        </p>
      </article>

      <h2>Discovering Clues</h2>

      <article className="card column">
        <img src="src/assets/images/clues.jpg" alt="man showing clues" />
        <p>
          You will have to present clues for the players to follow. It&apos;s a
          tough balance to find the right difficulty level for your clues,
          hidden items, and red herrings. Nothing hurts more than your players
          completely unable to solve or progress the game and it&apos;s very
          frustrating for them to have everything handed to them. Work with your
          players to find the right balance. Every Investigation gives the
          players a Clue Token. After collecting 4 Tokens the players can cash
          them in to get a piece of the bigger picture!
        </p>
      </article>
      <article className="card column">
        <p>
          Discovering Clues is based on a Percentile 2 D10 or 1 D100 Roll +
          Investigation Skill Bonus&apos;:
          <br />
          ● Unmissable Clue - 0 - 25%
          <br />
          ● Easy Clue - 26 - 50%
          <br />
          ● Moderate Clue - 51 - 75%
          <br />
          ● Hard Clue - 76 - 100%
          <br />
          Don&apos;t forget the Red Herring. Red Herrings are clues specifically
          designed to point the player in the WRONG direction. They can be fun
          and add a lot of depth to your story, but be careful not to overuse
          them. They can be very frustrating for your players.
        </p>
      </article>
      <ClueP />
    </section>
  );
};

export default clues;
