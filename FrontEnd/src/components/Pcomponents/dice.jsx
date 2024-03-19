import d4 from '../../assets/images/d4.png';
import d6 from '../../assets/images/d6.png';
import d8 from '../../assets/images/d8.png';
import d10 from '../../assets/images/d10.png';
import d12 from '../../assets/images/d12.png';
import d20 from '../../assets/images/d20.png';
import percentiles from '../../assets/images/percentiles.png';

const dice = () => {
  return (
    <section className="container" id="dice">
      <h3>Standard Dice</h3>
      <div className="card">
        <div className="column dice">
          <div className="box">
            <h4>D4</h4>
            <img src={d4} alt="d4 dice" />
          </div>
          <div className="box">
            <h4>D6</h4>
            <img src={d6} alt="d6 dice" />
          </div>
          <div className="box">
            <h4>D8</h4>
            <img src={d8} alt="d8 dice" />
          </div>
          <div className="box">
            <h4>D10</h4>
            <img src={d10} alt="d10 dice" />
          </div>
          <div className="box">
            <h4>D12</h4>
            <img src={d12} alt="d12 dice" />
          </div>
          <div className="box">
            <h4>D20</h4>
            <img src={d20} alt="d20 dice" />
          </div>
          <div className="box">
            <h4>Percent</h4>
            <img src={percentiles} alt="d100 dice" />
          </div>
        </div>
        <h3>Percent Dice is 2 D10 or 1 D100</h3>
      </div>
    </section>
  );
};

export default dice;
