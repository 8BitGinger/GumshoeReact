const police = () => {
  return (
    <section className="container">
      <div>
        <h2>The Neon City Police:</h2>

        <article className="card column">
          <img src="src/assets/images/lawman.png" alt="police officer" />
          <p>
            Entering the Neon City Police Station was like stepping into a film
            noir come to life. It was a place where hope flickered like a dying
            ember, and the only sure thing was the ever-present stain of
            corruption. The badges weren&apos;t shiny symbols of justice; they
            were tarnished tokens of a twisted power dynamic. The cops here
            weren&apos;t your knight-in-shining-armor heroes, they were more
            like walking question marks with a price tag. Here&apos;s a how a
            savvy player, might use or manipulate the laws of Neon City:
          </p>
        </article>

        <div className="container">
          <div className="column">
            <div className="left">
              <img
                src="src/assets/images/salMarconi.png"
                alt="sal marconi - the muscle"
              />
              <span className="italic bold">
                Sal &quot;The Muscle&quot; Marconi:
              </span>{' '}
              A hulking ex-boxer with fists the size of hams and a brain the
              size of a pea. Sal&apos;s loyalty is as fickle as a roulette
              wheel, but his strength is undeniable. How to use him: Need
              someone to shake down a deadbeat gambler or muscle in on a rival
              operation? Big Sal&apos;s your guy (for a hefty fee, of course).
              He&apos;s even been known to muscle the odd cop when the job
              required. Just be sure you can handle the collateral damage.
            </div>

            <div className="middle">
              <img
                src="src/assets/images/bettyFranklin.png"
                alt="betty franklin - the mole"
              />
              <span className="italic bold">Officer Betty Franklin:</span> Sharp
              as a tack and twice as jaded, Betty&apos;s disillusioned with the
              department&apos;s corruption. She leaks information for the right
              price, but only if it helps bring down the bigger fish. How to use
              her: Need a heads-up on an upcoming police raid, or intel on a
              rival gang&apos;s operation? Betty can be your inside woman, but
              tread carefully. Cross her and you&apos;ll find yourself facing
              the full force of the corrupt system she despises.
            </div>
            <div className="right">
              <img
                src="src/assets/images/smoothEddie.png"
                alt="Smooth Eddie valentine"
              />
              <span className="italic bold">Smooth Eddie Valentine:</span>{' '}
              Eddie&apos;s a walking rolodex of dirty cops, corrupt judges, and
              even seedier informants. He can make a traffic violation disappear
              faster than a magician pulling a rabbit out of a hat. How to use
              him: Got a pesky warrant hanging over your head, or need someone
              to &quot;disappear&quot; an incriminating piece of evidence?
              Eddie&apos;s your man, but be prepared to pay through the nose
              (and maybe even an alibi or two).
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default police;
