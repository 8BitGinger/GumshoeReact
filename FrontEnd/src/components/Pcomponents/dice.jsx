import React from 'react';

const dice = () => {
  return (
    <section className="container" id="dice">
      <h3>Standard Dice</h3>
      <div className="card">
        <div className="column dice">
          <div className="box">
            <h4>D4</h4>
            <img src="src/assets/images/d4.png" alt="d4 dice" />
          </div>
          <div className="box">
            <h4>D6</h4>
            <img src="src/assets/images/d6.png" alt="d6 dice" />
          </div>
          <div className="box">
            <h4>D8</h4>
            <img src="src/assets/images/d8.png" alt="d8 dice" />
          </div>
          <div className="box">
            <h4>D10</h4>
            <img src="src/assets/images/d10.png" alt="d10 dice" />
          </div>
          <div className="box">
            <h4>D12</h4>
            <img src="src/assets/images/d12.png" alt="d12 dice" />
          </div>
          <div className="box">
            <h4>D20</h4>
            <img src="src/assets/images/d20.png" alt="d20 dice" />
          </div>
          <div className="box">
            <h4>Percent</h4>
            <img src="src/assets/images/percentiles.png" alt="d100 dice" />
          </div>
        </div>
        <h3>Percent Dice is 2 D10 or 1 D100</h3>
      </div>
    </section>
  );
};

export default dice;
