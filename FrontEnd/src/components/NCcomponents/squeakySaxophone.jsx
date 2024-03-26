import React from 'react';
import jazz2 from '../../assets/images/jazz2.png';
import blankBack from '../../assets/images/blank-back.png';
import popsJohnson from '../../assets/images/popsJohnson.png';
import rustyTrombonePic from '../../assets/images/rustyTrombone.png';
import band from '../../assets/images/band.png';

const rustyTrombone = () => {
  return (
    <div>
      <section className="container" id="jazz">
        <h2>The Squeaky Saxophone:</h2>

        <div className="card4 column">
          <div className="text">
            <p>
              The club itself was a relic, a two-story building with peeling
              paint and a rickety fire escape clinging to its side like a
              forgotten dream. Inside, the air hung thick with the ghosts of
              past performances – the lingering scent of stale beer, cigarette
              smoke, and the faintest echo of a saxophones&apos;s wail. Dimly
              lit by flickering bulbs and mismatched lampshades, the walls were
              adorned with faded photographs of long-gone jazz legends, their
              faces etched with the bittersweet beauty of a life lived on the
              edge of a melody.
            </p>
          </div>
          <div className="rel">
            <img src={blankBack} alt="logo background" />
            <img
              id="roulette"
              className="abs float"
              src={jazz2}
              alt="jazz logo"
            />
          </div>
        </div>

        <div className="container">
          <div className="column">
            <div className="left">
              <img src={popsJohnson} alt="pops johnson" />
              <span className="bold">&quot;Pops&quot; Johnson,</span> the owner,
              a gruff man with a heart as worn as the piano keys on stage. He
              knew everyone who shuffled through – the heartbroken saxophonist
              drowning his sorrows, the aspiring singer with a voice as raw as a
              diamond in the rough, and the occasional shady figure with a taste
              for the blues and a secret to keep hidden.
              <br />*
            </div>

            <div className="middle">
              <img
                src={rustyTrombonePic}
                alt="The Squeaky Saxophone Jazz Club"
              />
              <span className="bold">The Squeaky Saxophone</span> was a relic, a
              The building wasn&apos;t much to look at and sometimes, the
              patrons were the same, but at this Jazz Club there is more than
              meets the eye. Inside the Players can perform for tips, get
              information about the underbelly, enjoy a nice drink, or even get
              hired for a job.
            </div>
            <div className="right">
              <img src={band} alt="Smoky Joe Miller Band" />
              <span className="bold">
                &quot;Smoky&quot; Joe&apos;s Ragtime Renegades,
              </span>{' '}
              occupies the dimly lit stage most nights. They were a ragtag band
              of veterans who poured their hearts and struggles into every note.
              Joe was a wiry man with a perpetually ash-stained face and a voice
              as raspy as a rusty hinge. He&apos;d seen it all, and made it into
              song!
              <br />*
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default rustyTrombone;
