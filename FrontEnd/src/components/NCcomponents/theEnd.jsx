import lonelyNoir from '../../assets/images/lonely-noir.jpg';

const theEnd = () => {
  return (
    <div>
      <section className="container">
        <h2>The End?:</h2>

        <article className="card column">
          <p>
            Use what you learned. The grime, the grit, the shadows in those
            alleys - weave it all into a new yarn. A mystery so twisted
            it&apos;ll leave your players sweatin&apos; and thinkin&apos; long
            after the bar tab&apos;s settled. You&apos;re the puppet master,
            kid, tugging at their strings, leading them deeper into the rabbit
            hole. Remember, the real adventure starts now.
          </p>
          <img src={lonelyNoir} alt="walking alone in the city" />
        </article>
      </section>
    </div>
  );
};

export default theEnd;
