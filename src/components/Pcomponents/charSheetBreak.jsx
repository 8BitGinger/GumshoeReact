import React from 'react';

const charSheetBreak = () => {
  return (
    <section className="container">
      <h3>Character Sheet Breakdown</h3>

      <div className="card">
        <ul className="stripe card2">
          <li>
            HP - Hit Points. When taking damage you remove the total from you
            Total HP. When this drops to -10 you meet your end.
          </li>
          <li>
            XP - Experience Points are earned by completing missions, defeating
            foes, and finding clues. It can be spent to increase skills or HP.
          </li>
          <li>
            Luck - Gain Luck by completing Missions, defeating enemies, and
            solving clues. You can spend these points and add them to your luck
            roll.
            <br />
            - Every 10 Luck Points apply a +1 to Percent Roll.
            <br />- A player can spend 100 Luck points to re-roll an unfavorable
            roll.
          </li>

          <li>
            Attack - This represents which dice you roll for your attack rolls.
            D4 - D20.
          </li>
          <li>
            Defense - This represents which dice you roll for your defense
            rolls. D4 - D20.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default charSheetBreak;
