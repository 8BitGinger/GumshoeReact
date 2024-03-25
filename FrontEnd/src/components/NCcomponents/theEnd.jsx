import lonelyNoir from '../../assets/images/lonely-noir.png';
import neonCityDefineCity from '../../assets/images/neonCity-defineCity.png';

const theEnd = () => {
  return (
    <div>
      <section className="container">
        <h2>The End?:</h2>

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
