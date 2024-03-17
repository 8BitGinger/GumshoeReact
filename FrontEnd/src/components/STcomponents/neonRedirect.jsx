import React from 'react';
import { Link } from 'react-router-dom';

const neonRedirect = () => {
  return (
    <section className="redirect">
      <h1 id="neoncity">
        Neon City
        <Link to="/neonCity" className="font-smaller">
          Explore the Streets ↬
        </Link>
      </h1>

      <article className="column card">
        <img src="src/assets/images/neoncity2.jpg" alt="neon city logo" />
        <p>
          Forget paper maps, sweetheart. This ain&apos;t your typical tourist
          trap. You wanna navigate the grimy underbelly of Neon City? Good.
          <br />
          <br />
          But listen close. This city ain&apos;t sunshine and lollipops.
          They&apos;re dark alleys webbed with neon, each click leading you
          deeper into the city&apos;s belly.
          <br />
          <br />
          Click the link above to Explore the Streets of Neon City!
        </p>
      </article>
    </section>
  );
};

export default neonRedirect;
