import React from 'react';

const LuckXP = () => {
  return (
    <section>
      <h2>Spending Luck and XP</h2>
      <article className="card column">
        <p>
          Luck Points are a valuable resource. They can be spent to add to a
          percent roll or to reroll a roll. Players accumulate luck roll in the
          combat Section, under Loot
          <br />
          ⚀ Percent Roll - A player can spend points and them to your luck roll.
          Every 10 Luck Points apply a +1 to Percent Roll.
          <br />
          ⚁ A player can spend 100 Luck points to re-roll an unfavorable roll.
          <br />
          XP is earned by completing missions, defeating foes, and finding
          clues. It can be spent to increase skills or HP.
          <br />
          ⚂ 500 XP can be spent to increase a skill by 1 point.
          <br />⚃ 2000 XP can be spent to increase HP by 5 points.
        </p>
        <img src="src/assets/images/dice-set.png" alt="dice logo" />
      </article>
    </section>
  );
};

export default LuckXP;
