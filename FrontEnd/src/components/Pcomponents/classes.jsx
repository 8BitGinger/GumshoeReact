import gameClasses from '../../Utils/classInfo';

const Classes = () => {
  return (
    <>
      <h3>Base Classes</h3>

      <section id="classes" className="cardWide">
        <ul className="classes">
          <div className="row">
            <h2>Class Template</h2>
          </div>

          {gameClasses.map((gameClass) => (
            <div className="class" key={gameClass.name}>
              <li>♢{gameClass.name}♢</li>
              <ol>
                Skills
                {gameClass.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
              <ol>
                Attack
                <li>{gameClass.attack}</li>
                Defense
                <li>{gameClass.defense}</li>
              </ol>
              <ol>
                Starting Equipment
                {gameClass.startingEquipment.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ol>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Classes;
