import React from 'react';

const Npc = () => {
  return (
    <section>
      <h2>Crafting NPCs</h2>

      <article className="card column">
        <p>
          Bringing NPCs to life is an art, not a formula. You want them to fit
          seamlessly into the world, yet be intriguing enough to spark player
          interaction.
          <br />
          Even the most meticulously crafted character might flop. Improvisation
          is key!
          <br />
          Did your charming bartender fall flat? Swap them for a gruff one with
          a hidden agenda.
          <br />
          Having a roster of ready-made NPCs allows you to adapt on the fly and
          keep the story flowing.
          <br />
          Don&apos;t forget to assign them stats based on the Enemy Example
          Template. Key Items and specialized loot can also be dropped by
          specific NPCs to keep the story cohesive and give your players that
          extra reward!
        </p>
        <img src="src/assets/images/combat2.jpg" alt="men in fedoras" />
      </article>

      <div className="card4">
        <div className="traits2">
          <p>
            Craft a more complete character by giving the NPC a unique trait:
            <br />
            __NPC Example Traits:__
            <br />
            <br />
            • Name Dropper: This fast-talking hustler peppers every conversation
            with the names of supposed high rollers and big shots, hoping to
            impress or intimidate.
            <br />
            • Nervous Nelly: This jittery fellow can&apos;t keep his hands
            still, constantly fiddling with tools or gadgets. His nervous energy
            is both endearing and slightly unsettling.
            <br />
            • Fortuneteller: This flamboyant fortune teller makes predictions
            that are hilariously wrong, but some have an uncanny knack of coming
            true.
            <br />• Conspiracy Theorist: This grizzled veteran with believes the
            government is controlled by aliens infiltrating the city. He peppers
            his conversations with nonsensical ramblings, but occasionally drops
            a nugget of truth amidst the madness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Npc;
