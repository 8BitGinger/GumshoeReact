import React from 'react';
import footsteps from '../../assets/images/footsteps.png';
import CluePStyleItem from './smallChunks/CluePStyleItem';

const cluePrinciples = () => {
  return (
    <section>
      <h3>Follow the C.L.U.E.s Principles</h3>

      <ul className="clue">
        <div>
          <img className="footsteps" src={footsteps} alt="footsteps" />
        </div>
        <article className="card">
          <CluePStyleItem
            upperCase="C"
            lowerCase="hallenging"
            title="Make it a Challenge!"
            content="This ain't no kiddie's playground. The scenarios thrown at you will twist your gut, leaving you questioning every shadow and second-guessing every move. It'll take more than bravado and a lucky break to crack these cases. You'll need to think like a chess grandmaster, ten steps ahead, your crew working in sync like a well-oiled gat. Remember, teamwork makes the dream work, and in Neon City, dreams are what keep you alive. So, partner up, sharpen your wits, and get ready to earn your stripes."
            tagline="Because in this town, only the toughest, smartest, and most resourceful gumshoes walk away clean."
          />

          <CluePStyleItem
            upperCase="L"
            lowerCase="imits"
            title="Set Limits!"
            content="Set Limits! Improvise, adapt, and overcome, partner. Crack a safe with a hairpin and a pack of gum? Sure, why not. Bribe a crooked cop with a well-placed punch and a whispered promise? Go for it. Just remember, anything goes in Neon City, as long as it gets the job done. And if you manage to pull off a feat of pure, unorthodox brilliance? Well, let's just say there might be some unique rewards waiting for you. Maybe a rare intel tip, a top-of-the-line weapon, or even a favor from someone unexpected. So, ditch the rulebook, hone your street smarts, and get ready to show Neon City what you're made of."
            tagline="After all, in this town, the only limit is your imagination."
          />

          <CluePStyleItem
            upperCase="U"
            lowerCase="ncover"
            title="Uncover the Truth!"
            content="Forget spoon-fed answers, gumshoe. Neon City's secrets are buried deep, hidden in the shadows and whispers of its inhabitants. You won't find the truth neatly wrapped in a bow, waiting to be untied. No, you gotta earn it. Pound the pavement, shake down every two-bit crook and double-crossing dame you can find. Scour crime scenes for clues, their whispers faint as a dying cigarette lighter in the rain. Decipher cryptic messages, their meaning as tangled as a dame's web of lies."
            tagline="Because in Neon City, the truth is waiting to be found, but it might just cost you more than you bargained for."
          />

          <CluePStyleItem
            upperCase="E"
            lowerCase="xictement"
            title="Keep it Exciting!"
            content="Forget static shootouts and cookie-cutter characters, gumshoe. Neon City throws curveballs like a drunken sailor on a bender. Every encounter is a gamble, a dance with danger that could erupt into a heart-stopping shootout or a tense standoff drenched in sweat and suspicion. The NPCs you meet ain't cardboard cutouts, either. They've got their own agendas, their own secrets, and their own ways of playing the game. We ain't promising happily-ever-afters in Neon City, but we guarantee you one thing: an experience you won't forget."
            tagline="So, light your cigarette, pull your fedora low, and step into the neon abyss. It's gonna be a hell of a night!"
          />
        </article>
        <div className="reverse">
          <img className="footsteps" src={footsteps} alt="footsteps" />
        </div>
      </ul>
    </section>
  );
};

export default cluePrinciples;
