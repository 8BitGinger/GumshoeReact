import React from 'react';

const Loot = () => {
  return (
    <section>
      <h2>Loot</h2>

      <article className="card column">
        <img src="src/assets/images/gear.png" alt="antique spy gear" />
        <p className="loot">
          Every win brings rewards.
          <br />
          Just remember, the bigger the score, the bigger the risk. This
          town&apos;s a two-way street.
          <br />
          Loot is earned by defeating foes, finding clues, and completing
          Missions. <br />
          <br />
          Loot Breaks down as follows:
          <br />
          <span className="underline">Combat</span>
          <br />
          ☘ 10 Luck Points <br />
          ⚄ XP (based on enemy difficulty)
          <br />
          ＄ 1 D6 dollars
          <br />
          <span className="underline">Clues</span>
          <br />
          ☘ 25 Luck Points
          <br />
          ⚄ 100 XP
          <br />
          <span className="underline">Missions</span>
          <br />
          ☘ 50 Luck Points
          <br />
          ⚄ 250 XP
          <br />＄ 2 D10 Dollars 🖑 (4 needed to unlock Part of the Mystery)
          <br />
        </p>
      </article>
    </section>
  );
};

export default Loot;
