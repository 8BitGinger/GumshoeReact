import './stpage.css';
import Clues from '../components/STcomponents/clues';
import Combat from '../components/STcomponents/combat';
import Npc from '../components/STcomponents/Npc';
import Gameplay from '../components/STcomponents/Gameplay';
import NeonCity from '../components/STcomponents/neonRedirect.jsx';
import Ufo from '../components/STcomponents/Ufo';
import FutureAdventure from '../components/STcomponents/FutureAdventure';
import stDownlooads from '../components/STcomponents/stDownloads';
import Back2Top from '../components/Back2Top';

const StoryTeller = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <div className="overlay spacer" id="top">
        <section className="container intro">
          <h1>
            <img
              id="iconST"
              className="page-top spin"
              src="src/assets/images/penrosev1.png"
            />
            Story Tellers
          </h1>
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
          <stDownloads />
          <Back2Top />
          <FutureAdventure />
          <Back2Top />
        </section>
      </div>
    </>
  );
};

export default StoryTeller;
