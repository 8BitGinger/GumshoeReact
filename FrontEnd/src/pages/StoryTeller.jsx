import './stpage.css';
import Clues from '../components/STcomponents/clues';
import Combat from '../components/STcomponents/combat';
import Npc from '../components/STcomponents/Npc';
import Gameplay from '../components/STcomponents/Gameplay';
import NeonCity from '../components/STcomponents/neonRedirect.jsx';
import Ufo from '../components/STcomponents/Ufo';
import FutureAdventure from '../components/STcomponents/FutureAdventure';
import Back2Top from '../components/Back2Top';
import StNav from '../components/STcomponents/StNav.jsx';
import StDownLoads from '../components/STcomponents/stDownloads';
import PenroseHeader from '../components/penroseHeader';
import StoryGenerator from '../components/STcomponents/storyGenerator';
import IntroST from '../components/STcomponents/introST';

const StoryTeller = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="overlay spacer" id="top">
        <section className="container intro">
          <h1>
            <PenroseHeader />
            Story Tellers
          </h1>
          <IntroST />
          <StNav />
          <Npc />
          <Back2Top />
          <Clues />
          <Back2Top />
          <Combat />
          <Back2Top />
          <Gameplay />
          <Back2Top />
          <NeonCity />
          <Back2Top />
          <Ufo />
          <StoryGenerator />
          <Back2Top />
          <StDownLoads />

          <FutureAdventure />
          <Back2Top />
        </section>
      </div>
    </>
  );
};

export default StoryTeller;
