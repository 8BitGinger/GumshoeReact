import city1 from '../../assets/images/city1.png';
import city2 from '../../assets/images/city2.png';
import CharacterList from './CharacterList';
import PenroseHeader from '../penroseHeader';
import LocationList from './LocationList';
import StoryHook from './StoryHook';
import ClueList from './ClueList';

const storyGenerator = () => {
  return (
    <section id="storyGen">
      <h1>
        <PenroseHeader />
        Story Generator
      </h1>
      <article className="card column">
        <img src={city1} alt="neon city dockside view" />
        <p>
          Forget the nickel dreams churned out by those story-cooking machines.
          You need the real deal, the grime under Neon City&apos;s glittery
          fingernails. This here website, it&apos;s like a dame with a rolodex
          full of secrets – NPCs shadier than a back alley brawl, locations
          dripping with more atmosphere than a bootleg speakeasy, and clues
          sharper than a broad&apos;s stiletto. Stuck in a rut? Running on fumes
          when it comes to inspiration? This dame&apos;ll give you the spark you
          need to light a fire under your next case. So ditch the dime novels
          and dive into the shadows, chum. The real story&apos;s waitin&apos;
          for you in the neon haze.
        </p>
      </article>
      <article className="toolCard">
        <CharacterList />

        <LocationList />

        <StoryHook />
        <ClueList />
      </article>
      <article className="card column">
        <p>
          Look, chum, building a case ain&apos;t easy. You need more than just
          dames with trouble written all over them and dark alleys reeking of
          despair. You need the right kind of characters, the kind Neon City
          breeds – a cast of wiseguys, dames with secrets deeper than the
          pockets of a trench coat, and heavies with fists the size of
          grapefruits. Same goes for locations. This here website? It&apos;s
          your key to that dark alley, stocked with the right kind of ammo to
          keep your players hooked. So, skip the paperwork and grab your fedora.
          The shadows are calling.
        </p>
        <img src={city2} alt="neon city dockside view" />
      </article>
    </section>
  );
};

export default storyGenerator;
