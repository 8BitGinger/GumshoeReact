import barmen from '../../assets/images/barmen.jpg';
import RightCard from '../Reuseable/Home/RightCard';
import BulletCard from '../Reuseable/Home/BulletCard';
import actions from '../../assets/images/actions.png';
import LeftCard from '../Reuseable/Home/LeftCard';
import BreakBottomLeft from '../Reuseable/Home/BreakBottomLeft';
import townsfolk from '../../assets/images/townsfolk.jpg';
import d20 from '../../assets/images/d20.png';
import diceSet from '../../assets/images/dice-set.png';
import Skills from './Skills';

const Gameplay = () => {
  return (
    <section>
      <h3 id="gameplay">
        Gameplay <br />
        Skills, Actions, and Points:
      </h3>

      <h2>So how do you play?</h2>

      <RightCard
        title="Gameplay"
        content="Gameplay is simple. After the character is created the Story Teller sets the scene. Each player then reacts to the scene. You've already seen how combat works, but what about non-combat actions? The player can react to the scene in a variety of ways. For instance let's say they are in smokey Jazz Hall searching for a Gangster. The Gangster runs."
        image={barmen}
        imageAlt="mysterious men at bar"
      />

      <BulletCard
        content={[
          'The player can:',
          'Command him to stop',
          'Persuade the Bouncer to help',
          'Give Chase',
          'If they try to command him to stop they would roll a Intimidate Skill Check and any Bonus in Intimidation',
          'If they try to persuade the Bouncer they would roll a Persuasion Skill check and add any Bonus in Persuasion.',
          'If they give chase they would roll an Athletics Skill check and add any Bonus in Athletics.',
        ]}
      />

      <h2>Creative Actions</h2>

      <LeftCard
        image={actions}
        imageAlt="people performing actions"
        content="Creative actions can be handled in a variety of ways. Let's say the player wants to shoot down a banner to trap the gangster instead of the other examples given. Instead of rolling a complex series of rolls for example: ⚔ Attack Roll for Shot 👁 Perception Check for Banner ☘ Luck Roll for Banner to fall etc... You could simplify it by having the player roll a Percent Roll. The difficulty value will be determined by Story Teller on a 1-100 scale. 1-10 Being very easy 100 being nearly impossible So if you decide it's fairly difficult and assign a value of 75. Then player would roll their Percent Dice (2D10 or 1D100) and any of their Luck Points they wish to Apply. If they succeed the banner falls and the gangster is trapped. If they fail the banner doesn't fall and the gangster gets away. It can be as simple as that!"
        classMod="shake"
      />

      <BulletCard
        content={[
          'You could simplify it by having the player roll a Percent Roll.',
          'The difficulty value will be determined by Story Teller on a 1-100 scale.',
          '1-10 Being very easy',
          '100 being nearly impossible',
          "So if you decide it's fairly difficult and assign a value of 75.",
          'Then player would roll their Percent Dice (2D10 or 1D100) and any of their Luck Points they wish to Apply.',
          'If they succeed the banner falls and the gangster is trapped.',
          "If they fail the banner doesn't fall and the gangster gets away.",
          'It can be as simple as that!',
        ]}
      />
      <Skills />
      <h2>Spending Luck and XP</h2>

      <RightCard
        title="Luck and XP"
        content="Luck Points are a valuable resource. They can be spent to add to a percent roll or to reroll a roll. Players accumulate luck roll in the combat Section, under Loot. XP is earned by completing missions, defeating foes, and finding clues. It can be spent to increase skills or HP."
        image={diceSet}
        imageAlt="dice logo"
      />

      <BulletCard
        content={[
          '⚀ Percent Roll - A player can spend points and them to your luck roll. Every 10 Luck Points apply a +1 to Percent Roll.',
          '⚁ A player can spend 100 Luck points to re-roll an unfavorable roll.',
          'XP is earned by completing missions, defeating foes, and finding clues. It can be spent to increase skills or HP.',
          '⚂ 500 XP can be spent to increase a skill by 1 point.',
          '⚃ 2000 XP can be spent to increase HP by 5 points.',
        ]}
      />
    </section>
  );
};

export default Gameplay;
