import React from 'react';
import combat from '../../assets/images/combat.jpg';

const AttackDefense = () => {
  return (
    <section>
      <h2>Attack & Defense Rolls</h2>

      <article className="card column">
        <img src={combat} alt="gangsters posing with guns" />
        <p>
          Combat is based on Attack & Defense Rolls.
          <br />
          The Attack Roll is based on the dice value of the Attack for player or
          NPC.
          <br />
          The damage of the attack is based on the weapon.
          <br />
          The Attacker begins by rolling the Attack Dice. The Defender then
          rolls the Defense Dice.
          <br />
          If the Attack Roll is higher than the Defense Roll, the attack is
          successful and the damage is applied.
          <br />
          If the Defense Roll is higher than the Attack Roll, the attack is
          blocked or dodged. Ties always go to defense.
        </p>
      </article>
    </section>
  );
};

export default AttackDefense;
