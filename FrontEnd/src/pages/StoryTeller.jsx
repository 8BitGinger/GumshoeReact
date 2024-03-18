import './stpage.css';
import Clues from '../components/STcomponents/clues';
import Combat from '../components/STcomponents/combat';
import Npc from '../components/STcomponents/Npc';
import Gameplay from '../components/STcomponents/Gameplay';
import NeonCity from '../components/STcomponents/neonRedirect.jsx';
import Ufo from '../components/STcomponents/Ufo';
import FutureAdventure from '../components/STcomponents/FutureAdventure';
import stDownlooads from '../components/STcomponents/stDownloads';

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

          <Clues />

          <Combat />

          <Gameplay />
          <NeonCity />

          <Ufo />

          <stDownlooads />

          <FutureAdventure />
          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default StoryTeller;
