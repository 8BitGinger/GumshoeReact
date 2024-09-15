import './stpage.css';
import Clues from '../components/STcomponents/clues.jsx';
import Combat from '../components/STcomponents/Combat.jsx';
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
import brandy from '../assets/images/whiskey.png';
import RightCard from '../components/Reuseable/Home/RightCard.jsx';

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

          <StNav />
          <RightCard
            title="Brandy and Cigars"
            content="This Story is best enjoyed with a fine cigar and smooth cup of brandy,
            but if you don't have any of those, try setting the scene with
            some music.  Just click the music icon in the upper right corner if you
            haven't already."
            image={brandy}
            imageAlt="aged picture of a glass of brandy and cigar"
          />
          <Npc />
          <Back2Top />
          <Clues />
          <Back2Top />
          <Combat />
          <Back2Top />
          <Gameplay />
          <Back2Top />
          <NeonCity />

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
