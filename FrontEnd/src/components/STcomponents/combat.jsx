import AttackDefense from './AttackDefense';
import Criticals from './Criticals';
import DeathInjury from './DeathInjury';
import Loot from './Loot';
import StatTemplate from './StatTemplate';

const combat = () => {
  return (
    <section>
      <h3 id="combat">Combat</h3>

      <h2>Turn Order and Combat</h2>

      <article className="card column">
        <p>
          Combat can be the heart-pounding crescendo, the bullet-dodging ballet
          under a hail of gunfire. But just like a jazz solo, too many bars and
          it turns into a cacophony, too few and you lose the rhythm. Finding
          the sweet spot for fisticuffs depends on your story, a delicate dance
          between the players and the perils you throw their way.
          <br />
          <br />
          Turn order starts with whoever initiates combat. It is then clockwise
          around the table. When it gets to the Story Teller he will roll for
          the NPC&apos;s.
        </p>
        <img src="src/assets/images/gangsters.jpg" alt="gangsters at desk" />
      </article>
      <AttackDefense />
      <Criticals />
      <DeathInjury />
      <Loot />
      <StatTemplate />
    </section>
  );
};

export default combat;
