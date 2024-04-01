import lonelyNoir from '../../assets/images/lonely-noir.jpg';
import neonCityDefineCity from '../../assets/images/neonCity-defineCity.png';
import abduction from '../../assets/images/alien-invasion2.jpg';
import PenroseHeader from '../penroseHeader';

const theEnd = () => {
  return (
    <div>
      <section className="container">
        <h1>
          <PenroseHeader />
          The End?
        </h1>
        <h2>The Truth is...Somewhere?</h2>

        <article className="card column">
          <img src={abduction} alt="alien abducting woman from mans arms" />

          <p>
            The memory claws like a cheap suit: your girlfriend, snatched in a
            flash of unholy light. You thought you closed the case, brought
            justice for her. But shadows linger, questions fester. Time to put
            the past on your back and the grindstone under your nose, detective.
            Every clue is a step closer to the truth and one step closer to
            danger.
          </p>
        </article>

        <article className="card column">
          <p>
            Players: Use what you learned. The grime, the grit, the shadows in
            those alleys - to get through this twisted mystery. Leave your
            enemies sweatin&apos; and thinkin&apos; long after the bar
            tab&apos;s settled. But remember, you&apos;re not the puppet master,
            kid, tugging at the strings, you&apos;re just being led deeper into
            the rabbit hole. The real adventure is just beginning!.
          </p>
          <img src={lonelyNoir} alt="walking alone in the city" />
        </article>

        <article className="card column">
          <img src={neonCityDefineCity} alt="walking alone in the city" />

          <p>
            Story Tellers: You aren&apos;t building sandcastles, chum and this
            ain&apos;t no sandbox game. Neon City&apos;s yours to mold.
            Characters? Plots? Twists? You&apos;re the painter, doll. I built
            the canvas, you paint the masterpiece. Just remember, Neon City
            never sleeps, and its stories have a way of writing themselves.
          </p>
        </article>
      </section>
    </div>
  );
};

export default theEnd;
