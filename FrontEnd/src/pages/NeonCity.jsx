import Police from '../components/NCcomponents/police.jsx';
import Penrose from '../components/NCcomponents/penrose.jsx';
import Gangs from '../components/NCcomponents/gangs.jsx';
import Skylark from '../components/NCcomponents/skylark.jsx';
import Casino from '../components/NCcomponents/casino.jsx';
import SqueakySaxophone from '../components/NCcomponents/squeakySaxophone.jsx';
import Harbor from '../components/NCcomponents/harbor.jsx';
import Starlite from '../components/NCcomponents/starlite.jsx';
import NeonNav from '../components/NCcomponents/neonNav.jsx';
import TheEnd from '../components/NCcomponents/theEnd.jsx';
import Back2Top from '../components/Back2Top.jsx';
import PenroseHeader from '../components/penroseHeader.jsx';
import IntroCard from '../components/NCcomponents/introCard.jsx';

const NeonCity = () => {
  window.scrollTo(0, 0);

  return (
    <div className="overlay spacer" id="top">
      <section className="container intro">
        <h1 id="top-neon">
          <PenroseHeader />
          Neon City &amp;
          <br />
          The World of Gumshoe:
        </h1>

        <NeonNav />
        <IntroCard />
        <Police />
        <Back2Top />
        <Penrose />
        <Back2Top />
        <Gangs />
        <Back2Top />
        <Skylark />
        <Back2Top />
        <Casino />
        <Back2Top />
        <SqueakySaxophone />
        <Back2Top />
        <Harbor />
        <Back2Top />
        <Starlite />
        <Back2Top />
        <TheEnd />
        <Back2Top />
      </section>
    </div>
  );
};

export default NeonCity;
