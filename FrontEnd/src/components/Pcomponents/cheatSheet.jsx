import SplitCard from '../Reuseable/Home/SplitCard';

const cheatSheet = () => {
  return (
    <section className="container" id="charBuild">
      <h3>Character Build CheatSheet</h3>

      <SplitCard
        leftHalf={
          <p>
            Easy Character Build Process <br />
            <br />
            1 - Start with your a name and a Backstory. It&apos;s much easier to
            pick a class and determine Skills if you know you who you are!
            <br />
            <br />
            2 - Determine your Class. After your backstory choose a class that
            fits and provides the bonus&apos; you think are the most valuable to
            your character.
            <br />
            <br />
            3 - Apply the starting 7 additional Skill Points to any category you
            see fit. Remember each Skill can only have a Max of 5 Skill Points.
            Any points you don&apos;t spend can be applied to your HP!
            <br />
            <br />
            4 - Roll your HP. HP rolls are based on a D20. You can also choose
            to spend any unused Starting Skill Points to add to your total HP.
            Re-roll anything under a 5 automatically.
            <br />
            <br />
            5 - Establish Starting Equipment, Cash, and Weapons from your Class.
            Don&apos;t forget to also note your Attack and Defense Dice Value!
            Some classes do not include weapons!
            <br />
            <br />6 - Optional - Create a Character Trait or two to spice up
            your adventure and help establish motivations for future choices.
          </p>
        }
        rightHalf={
          <div className="traits">
            __Example Character Traits:__
            <p>
              <br />
              <br />
              • Lucky Charm: You carry a peculiar trinket (rabbit&apos;s foot,
              chipped poker chip) that you believe brings good fortune. You
              compulsively rub it before any risky venture.
              <br />
              • Neon Obsession: You&apos;re mesmerized by the city&apos;s neon
              glow. You get lost in its colors, sometimes missing important
              details in your surroundings.
              <br />
              • Walking Jukebox: You can&apos;t resist quoting song lyrics in
              everyday situations, often to the amusement or confusion of those
              around you.
              <br />
              • Fashion Faux Pas Fighter: You possess a terrible sense of style,
              but you fiercely defend your outrageous neon outfits as artistic
              statements.
              <br />
              • Paranoia Pal: You see conspiracies lurking around every corner.
              Every shadow hides a potential foe, and every friendly smile masks
              a hidden agenda.
              <br />• Gambler&apos;s Spirit: You can&apos;t resist a good bet,
              even if the odds are stacked against you. You live for the thrill
              of the gamble, not necessarily the reward.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default cheatSheet;
