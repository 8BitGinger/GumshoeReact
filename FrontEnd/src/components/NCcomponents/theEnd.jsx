import lonelyNoir from '../../assets/images/lonely-noir.jpg';
import neonCityDefineCity from '../../assets/images/neonCity-defineCity.png';
import abduction from '../../assets/images/alien-invasion2.jpg';
import PenroseHeader from '../penroseHeader';
import LeftCard from '../Reuseable/Home/LeftCard';
import RightCard from '../Reuseable/Home/RightCard';

const theEnd = () => {
  return (
    <div>
      <section className="container">
        <h1>
          <PenroseHeader />
          The End?
        </h1>
        <h2>The Truth is...Somewhere?</h2>

        <LeftCard
          image={abduction}
          imageAlt="alien abducting woman from man's arms"
          content="The memory claws like a cheap suit: your girlfriend, snatched in a flash of unholy light. You thought you closed the case, brought justice for her. But shadows linger, questions fester. Time to put the past on your back and the grindstone under your nose, detective. Every clue is a step closer to the truth and one step closer to danger."
        />

        <RightCard
          image={lonelyNoir}
          imageAlt="walking alone in the city"
          content="Players: Use what you learned. The grime, the grit, the shadows in those alleys - to get through this twisted mystery. Leave your enemies sweatin' and thinkin' long after the bar tab's settled. But remember, you're not the puppet master, kid, tugging at the strings, you're just being led deeper into the rabbit hole. The real adventure is just beginning!"
        />

        <LeftCard
          image={neonCityDefineCity}
          imageAlt="walking alone in the city"
          content="Story Tellers: You aren't building sandcastles, chum and this ain't no sandbox game. Neon City's yours to mold. Characters? Plots? Twists? You're the painter, doll. I built the canvas, you paint the masterpiece. Just remember, Neon City never sleeps, and its stories have a way of writing themselves."
        />
      </section>
    </div>
  );
};

export default theEnd;
