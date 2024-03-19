import actions from '../../assets/images/actions.png';

const CreativeActions = () => {
  return (
    <section>
      <h2>Creative Actions</h2>
      <article className="column">
        <img
          id="ghost"
          className="shake"
          src={actions}
          alt="people performing actions"
        />
        <p>
          Creative actions can be handled in a variety of ways. Let&apos;s say
          the player wants to shoot down a banner to trap the gangster instead
          of the other examples given.
          <br />
          Instead of rolling a complex series of rolls for example:
          <br />
          ⚔ Attack Roll for Shot
          <br />
          👁 Perception Check for Banner
          <br />
          ☘ Luck Roll for Banner to fall etc...
          <br />
        </p>
      </article>
      <p className="column card">
        You could simplify it by having the player roll a Percent Roll.
        <br />
        The difficulty value will be determined by Story Teller on a 1-100
        scale.
        <br />
        ● 1-10 Being very easy <br />
        ● 100 being nearly impossible
        <br />
        So if you decide it&apos;s fairly difficult and assign a value of 75.
        Then player would roll their Percent Dice (2D10 or 1D100) and any of
        their Luck Points they wish to Apply.
        <br />
        If they succeed the banner falls and the gangster is trapped.
        <br />
        If they fail the banner doesn&apos;t fall and the gangster gets away.
        <br />
        It can be as simple as that!
      </p>
    </section>
  );
};

export default CreativeActions;
