import React from 'react';
import combat2 from '../../assets/images/combat2.jpg';
import LeftCard from '../Reuseable/Home/LeftCard';
import BulletCard from '../Reuseable/Home/BulletCard';

const Npc = () => {
  return (
    <section>
      <h2>Crafting NPCs</h2>

      <LeftCard
        image={combat2}
        imageAlt="men in fedoras"
        content={
          <p>
            Bringing NPCs to life is an art, not a formula. You want them to fit
            seamlessly into the world, yet be intriguing enough to spark player
            interaction.
            <br />
            Even the most meticulously crafted character might flop.
            Improvisation is key!
            <br />
            Did your charming bartender fall flat? Swap them for a gruff one
            with a hidden agenda.
            <br />
            Having a roster of ready-made NPCs allows you to adapt on the fly
            and keep the story flowing.
            <br />
            Don&apos;t forget to assign them stats based on the Enemy Example
            Template. Key Items and specialized loot can also be dropped by
            specific NPCs to keep the story cohesive and give your players that
            extra reward!
          </p>
        }
      />

      <BulletCard
        title="            Craft a more complete character by giving the NPC a unique trait:
"
        subtitle="NPC Example Traits"
        content={[
          'Name Dropper: This fast-talking hustler peppers every conversation with the names of supposed high rollers and big shots, hoping to impress or intimidate.',

          'Nervous Nelly: This jittery fellow can&apos;t keep his hands still, constantly fiddling with tools or gadgets. His nervous energy is both endearing and slightly unsettling.',

          'Fortuneteller: This flamboyant fortune teller makes predictions that are hilariously wrong, but some have an uncanny knack of coming true.',

          'Conspiracy Theorist: This grizzled veteran with believes the government is controlled by aliens infiltrating the city. He peppers his conversations with nonsensical ramblings, but occasionally drops a nugget of truth amidst the madness.',
        ]}
        footTag="Check the Story Generator Section to generate some quick ideas!"
      />
    </section>
  );
};

export default Npc;
