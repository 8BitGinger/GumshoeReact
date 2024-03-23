import critical2 from '../../assets/images/critical2.png';

const Criticals = () => {
  return (
    <section>
      <h2>Critical Hits / Defends</h2>

      <article className="card column">
        <p>
          CRITICAL HITS/DEFENDS
          <br />
          There are a few exceptions to a successful hit.
          <br />
          If the attacker rolls a 1, it is a critical miss and the attack not
          only fails, but such a mishap, such as a misfiring gun or dropping
          their knife. If the defender rolls the highest possible defense, it is
          a critical block and the attack is not only blocked or dodged, but
          they gain an Advantage Attack.
          <br />
          If the Attack is higher than the players, but the player rolls a
          Critical Dodge then it is still considered a successful dodge!
          <br />
        </p>
        <img src={critical2} alt="d20" />
      </article>
      <div className="card">
        <p>
          ADVANTAGE ATTACK
          <br />
          When a player gains an Advantage Attack they automatically get the
          very next attack against the opponent who they critically dodged.
          After the attack/defense rolls it returns to standard turn order.
        </p>
      </div>
    </section>
  );
};

export default Criticals;
