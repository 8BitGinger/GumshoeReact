import city1 from '../../assets/images/city1.png';
import city2 from '../../assets/images/city2.png';
import CharacterList from './smallChunks/CharacterList';
import PenroseHeader from '../penroseHeader';
import LocationList from './smallChunks/LocationList';
import StoryHook from './smallChunks/StoryHook';
import ClueList from './smallChunks/ClueList';
import LeftCard from '../Reuseable/Home/LeftCard';
import RightCard from '../Reuseable/Home/RightCard';

const storyGenerator = () => {
  return (
    <section id="storyGen">
      <h1>
        <PenroseHeader />
        Story Generator
      </h1>

      <LeftCard
        content="Forget the nickel dreams churned out by those story-cooking machines. You need the real deal, the grime under Neon City's glittery fingernails. This here website, it's like a dame with a rolodex full of secrets – NPCs shadier than a back alley brawl, locations dripping with more atmosphere than a bootleg speakeasy, and clues sharper than a broad's stiletto. Stuck in a rut? Running on fumes when it comes to inspiration? This dame'll give you the spark you need to light a fire under your next case. So ditch the dime novels and dive into the shadows, chum. The real story's waitin' for you in the neon haze."
        image={city1}
        imageAlt="neon city dockside view"
      />

      <section className="cardWide">
        <div className="tool">
          <CharacterList />
          <LocationList />
          <StoryHook />
          <ClueList />
        </div>
      </section>

      <RightCard
        content={
          "Let's face it, chum. Building a case ain't easy. You need more than just dames with trouble written all over them and dark alleys reeking of despair. You need the right kind of characters, the kind Neon City breeds – a cast of wiseguys, dames with secrets deeper than the pockets of a trench coat, and heavies with fists the size of grapefruits. Same goes for locations. This here website? It's your key to that dark alley, stocked with the right kind of ammo to keep your players hooked. So, skip the paperwork and grab your fedora. The shadows are calling."
        }
        image={city2}
        imageAlt="neon city dockside view"
      />
    </section>
  );
};

export default storyGenerator;
