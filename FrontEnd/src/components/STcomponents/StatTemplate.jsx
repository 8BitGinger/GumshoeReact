const StatTemplate = () => {
  return (
    <>
      <h2>Enemy Stat Template:</h2>

      <section className="cardWide">
        <div className="containerWide">
          <div className="box2">
            Basic NPC - HP-15. <br />
            Attack - D4. Defense - D4. <br />
            XP - 10.
          </div>
          <div className="box2">
            Minor Enemy - HP-20. <br />
            Attack - D6. Defense - D6. <br />
            XP - 20.
          </div>
          <div className="box2">
            Medium Enemy - HP-30. <br />
            Attack - D8. Defense - D8. <br />
            XP - 30.
          </div>
          <div className="box2">
            Major Enemy - HP-40. <br />
            Attack - D10. Defense - D10. <br />
            XP - 40.
          </div>
          <div className="box2">
            Minor Boss - HP-50. <br />
            Attack - D12. Defense - D12. <br />
            XP - 50.
          </div>
          <div className="box2">
            Medium Boss - HP-70. <br />
            Attack - D12. Defense - D12. <br />
            XP - 70.
          </div>
          <div className="box2">
            Major Boss - HP-90. <br />
            Attack - D20. Defense - D20. <br />
            XP - 90.
          </div>
          <h3>
            HP = Health Points <br /> XP = Experience Points
          </h3>
        </div>
      </section>
    </>
  );
};

export default StatTemplate;
