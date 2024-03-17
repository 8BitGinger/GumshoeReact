import './stpage.css';
import Clues from '../components/STcomponents/clues';
import Combat from '../components/STcomponents/combat';
import Npc from '../components/STcomponents/Npc';
import Gameplay from '../components/STcomponents/Gameplay';
import NeonCity from '../components/STcomponents/neonRedirect.jsx';
import Ufo from '../components/STcomponents/Ufo';
import FutureAdventure from '../components/STcomponents/FutureAdventure';

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

          <div className="btn-holder">
            <a href="#top">
              <button id="topBtn" className="btn btn2">
                Back to Top
              </button>
            </a>
          </div>

          <h3 id="downloads">Downloads</h3>

          <p className="twin"></p>
          <div className="card5 skew">
            <span className="col">
              <img
                className="avatar3"
                src="src/assets/images/gear.png"
                alt="1930s gear"
              />

              <a href="src/assets/images/docs/NeonCity-CharSheet.pdf" download>
                ✓ Character Sheet
              </a>

              <a
                href="src/assets/images/docs/NeonCity-StarterAdventure.pdf"
                download
              >
                ✓ Starter Adventure
              </a>
            </span>
          </div>

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
