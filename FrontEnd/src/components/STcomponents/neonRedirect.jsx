import { Link } from 'react-router-dom';
import neoncity2 from '../../assets/images/neoncity2.jpg';
import BreakBottomLeft from '../Reuseable/Home/BreakBottomLeft';
import BreakCardMiddleLeft from '../Reuseable/Home/BreakCardMiddleLeft';

const neonRedirect = () => {
  return (
    <section className="redirect">
      <h1 id="neoncity">
        Neon City
        <Link to="/neonCity" className="font-smaller">
          Explore the Streets ↬
        </Link>
      </h1>

      <BreakCardMiddleLeft
        content1="Forget paper maps, sweetheart. This ain't your typical tourist trap. You wanna navigate the grimy underbelly of Neon City? Good."
        content2="But listen close. This city ain't sunshine and lollipops. They're dark alleys webbed with neon, each click leading you deeper into the city's belly."
        image={neoncity2}
        imageAlt="neon city logo"
      />
    </section>
  );
};

export default neonRedirect;
