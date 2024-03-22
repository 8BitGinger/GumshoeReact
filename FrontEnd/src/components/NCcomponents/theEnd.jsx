import lonelyNoir from '../../assets/images/lonely-noir.jpg';

const theEnd = () => {
  return (
    <div>
      <section className="container">
        <h2>The End?:</h2>

        <article className="card column">
          <p>
            Use what you learned. The grime, the grit, the shadows in those
            alleys - to get through this twisted mystery. Leave your enemies
            sweatin&apos; and thinkin&apos; long after the bar tab&apos;s
            settled. But remember, you&apos;re not the puppet master, kid,
            tugging at the strings, you&apos;re just being led deeper into the
            rabbit hole. The real adventure is just beginning!.
          </p>
          <img src={lonelyNoir} alt="walking alone in the city" />
        </article>
      </section>
    </div>
  );
};

export default theEnd;
