import StatBox from './smallChunks/StatBox';

const StatTemplate = () => {
  return (
    <>
      <h2>Enemy Stat Template:</h2>

      <section className="cardWide">
        <div className="containerWide">
          <StatBox title="Basic NPC" attack="D4" defense="D4" hp="15" xp="10" />
          <StatBox
            title="Minor Enemy"
            attack="D6"
            defense="D6"
            hp="20"
            xp="20"
          />
          <StatBox
            title="Medium Enemy"
            attack="D8"
            defense="D8"
            hp="30"
            xp="30"
          />
          <StatBox
            title="Major Enemy"
            attack="D10"
            defense="D10"
            hp="40"
            xp="40"
          />
          <StatBox
            title="Minor Boss"
            attack="D12"
            defense="D12"
            hp="50"
            xp="50"
          />
          <StatBox
            title="Medium Boss"
            attack="D12"
            defense="D12"
            hp="70"
            xp="70"
          />
          <StatBox
            title="Major Boss"
            attack="D20"
            defense="D20"
            hp="90"
            xp="90"
          />
          <h3>
            HP = Health Points <br />
            XP = Experience Points
          </h3>
        </div>
      </section>
    </>
  );
};

export default StatTemplate;
