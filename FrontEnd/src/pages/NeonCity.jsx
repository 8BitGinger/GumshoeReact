import Police from '../components/NCcomponents/police.jsx';
import Penrose from '../components/NCcomponents/penrose.jsx';
import Gangs from '../components/NCcomponents/gangs.jsx';
import Sklylark from '../components/NCcomponents/skylark.jsx';
import Casino from '../components/NCcomponents/casino.jsx';
import SqueakySaxophone from '../components/NCcomponents/squeakySaxophone.jsx';
import Harbor from '../components/NCcomponents/harbor.jsx';
import Starlite from '../components/NCcomponents/starlite.jsx';
import NeonNav from '../components/NCcomponents/neonNav.jsx';
import TheEnd from '../components/NCcomponents/theEnd.jsx';
import Back2Top from '../components/Back2Top.jsx';

const NeonCity = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1 id="top-neon">
          <img
            id="iconST"
            className="page-top spin"
            src="src/assets/images/penrosev1.png"
          />
          Neon City &amp;
          <br />
          The World of Gumshoe:
        </h1>
        <NeonNav />
        <Police />
        <Penrose />
        <Gangs />
        <Sklylark />
        <Casino />
        <SqueakySaxophone />
        <Harbor />
        <Starlite />
        <TheEnd />
        <Back2Top />
      </section>
    </div>
  );
};

export default NeonCity;
