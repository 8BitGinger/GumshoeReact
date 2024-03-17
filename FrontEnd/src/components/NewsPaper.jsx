import React from 'react';

const NewsPaper = () => {
  return (
    <div className="container">
      <section className="headline-container ">
        <article className="col3">
          <div className="row-headline">
            <div className="left-headline row">
              <div className="cents">2</div>
              <div className="cents-small">¢</div>
            </div>
            <div className="middle-headline">
              <p>The Mirror</p>
            </div>
            <div className="right-headline">
              <p className="news">FINAL</p>
            </div>
          </div>
          <div className="headline-title">
            <h5>EXTRA! EXTRA! READ ALL ABOUT IT</h5>
          </div>
          <div className="headline-subtitle">
            <h4>
              Neon Nightmare! Tinseltown Wannabe Steals Stars, Loses Soul!
            </h4>
          </div>
          <p className="headline">
            <span className="wrap" alt="casino interior hand-drawn"></span>
            &quot; This dame, Neon City, she shines brighter than a dozen
            interrogation lamps, but beneath that glitz and glamour,
            there&apos;s a darkness thicker than a week-old cigar. <br />
            <br />
            Yeah, the night sky&apos;s a canvas for a million neon signs, and
            the air thrums with music that&apos;d make a saint tap a foot. But
            listen closer, and you hear the clink of bootleg liquor glasses in
            speakeasies tucked away in forgotten alleys.
            <br />
            <br />
            Burlesque halls and opium dens offer their own kind of escape, the
            fast kind that leaves you hollowed out and wanting more. And if you
            manage to steer clear of those temptations, you still gotta face The
            Block.
            <br />
            <br />
            Towers of sin, practically touching, each room a portal to a
            different kind of vice. Gambling, girls, shows you wouldn&apos;t
            believe. They call it a marvel of modern society, but it&apos;s a
            monument to mankind&apos;s darkest desires.
            <br />
            <br />
            Neon City&apos;s underbelly, it ain&apos;t just about this town,
            see? It&apos;s a reflection of somethin&apos; deeper, somethin&apos;
            that lurks in all of us, waiting for the right moment to slither
            out.&quot;
          </p>
          <div className="row2 welcome">
            <img src="src/assets/images/reporter.png" alt="reporter" />
            <h4 className="italic">
              -Harvey Stietz <br />
              <span className="sub-title2">Hollywoodland Mirror</span>
            </h4>
          </div>
        </article>
      </section>
    </div>
  );
};

export default NewsPaper;
