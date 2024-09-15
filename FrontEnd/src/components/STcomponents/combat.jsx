import StatTemplate from './StatTemplate';
import gangsters from '../../assets/images/gangsters.jpg';
import BreakCardMiddleRight from '../Reuseable/Home/BreakCardMiddleRight';
import BulletCardPic from '../Reuseable/Home/BulletCardPic';
import critical2 from '../../assets/images/critical2.png';
import BulletCardPicRight from '../Reuseable/Home/BulletCardPicRight';
import RightCard from '../Reuseable/Home/RightCard';
import death from '../../assets/images/death.png';
import combatPic from '../../assets/images/combat.jpg';
import LeftCard from '../Reuseable/Home/LeftCard';
import gear from '../../assets/images/gear.png';
import BulletCard from '../Reuseable/Home/BulletCard';

const combat = () => {
  return (
    <section>
      <h3 id="combat">Combat</h3>

      <h2>Turn Order and Combat</h2>

      <BreakCardMiddleRight
        content1="Combat can be the heart-pounding crescendo, the bullet-dodging ballet under a hail of gunfire. But just like a jazz solo, too many bars and it turns into a cacophony, too few and you lose the rhythm. Finding the sweet spot for fisticuffs depends on your story, a delicate dance between the players and the perils you throw their way."
        content2="Turn order starts with whoever initiates combat. It is then clockwise around the table. When it gets to the Story Teller he will roll for the NPC's."
        image={gangsters}
        imageAlt="gangsters at desk"
      />

      <BulletCardPic
        image={combatPic}
        imageAlt="gangsters posing with guns"
        content={[
          'Combat is based on Attack & Defense Rolls.',
          'The Attack Roll is based on the dice value of the Attack for player or NPC.',
          'The damage of the attack is based on the weapon.',
          'The Attacker begins by rolling the Attack Dice. The Defender then rolls the Defense Dice.',
          'If the Attack Roll is higher than the Defense Roll, the attack is successful and the damage is applied.',
          'If the Defense Roll is higher than the Attack Roll, the attack is blocked or dodged. Ties always go to defense.',
        ]}
      />
      <h2>Critical Hits / Defends</h2>

      <BulletCardPicRight
        image={critical2}
        imageAlt="d20"
        content={[
          'CRITICAL HITS/DEFENDS',
          'There are a few exceptions to a successful hit.',
          'If the attacker rolls a 1, it is a critical miss and the attack not only fails, but also endures a mishap, such as a misfiring gun or dropping their knife. If the defender rolls the highest possible defense, it is a critical block and the attack is not only blocked or dodged, but they gain an Advantage Attack.',
          'If the Attack is higher than the players, but the player rolls a Critical Dodge then it is still considered a successful dodge!',
        ]}
      />

      <LeftCard
        content={
          <p>
            ADVANTAGE ATTACK
            <br />
            When a player gains an Advantage Attack they automatically get the
            very next attack against the opponent who they critically dodged.
            After the attack/defense rolls it returns to standard turn order.
          </p>
        }
      />

      <h2>Death and Injury</h2>
      <LeftCard
        image={death}
        imageAlt="death logo"
        content={
          <p>
            DEATH AND INJURY
            <br />
            Here a bad decision can leave you stiffer than a rigged poker deck.
            Here is how Death and Injury work in Gumshoe:
            <br />
            If a player reaches 0 HP they are considered incapacitated.
            <br />
            If they reach -5 HP they are considered mortally wounded and will
            die in 1D4 rounds, unless attended to.
            <br />
            If they reach -10 HP they are considered dead.
            <br />
            They can be healed with Medical Skill Checks or First Aid Kits.
          </p>
        }
      />

      <RightCard
        className="remove-bullet"
        title="Death and Injury"
        content="Neon City ain't kind to the careless, chum. Take a wrong turn down a dark alley or rub the wrong dame the wrong way, and you might just find yourself pushing up daisies (or worse, feeding the fishes in the harbor). But hey, that's the beauty of this game, right? The Storyteller, yourself, gets to decide if your story ends with a whimper or a bang. It's a story only you can tell!"
        image={death}
        imageAlt="skull and crossbones"
      />

      <h2>Loot</h2>

      <LeftCard
        title="Loot"
        content="Every win brings rewards. Just remember, the bigger the score, the bigger the risk. This town's a two-way street. Loot is earned by defeating foes, finding clues, and completing Missions."
        image={gear}
        imageAlt="antique spy gear"
      />

      <BulletCard
        className="no-bullet"
        content={[
          '☘ 10 Luck Points',
          '⚄ XP (based on enemy difficulty)',
          '＄ 1 D6 dollars',
          '☘ 25 Luck Points',
          '⚄ 100 XP',
          '☘ 50 Luck Points',
          '⚄ 250 XP',
          '＄ 2 D10 Dollars',
          '🖑 Clue Tokens (4 needed to unlock Part of the Mystery)',
        ]}
      />

      <StatTemplate />
    </section>
  );
};

export default combat;
