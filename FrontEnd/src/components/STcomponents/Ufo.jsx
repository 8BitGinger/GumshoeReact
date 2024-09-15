import mystery from '../../assets/images/mystery.jpg';
import BreakCardMiddleRight from '../Reuseable/Home/BreakCardMiddleRight';
import LeftCard from '../Reuseable/Home/LeftCard';

const Ufo = () => {
  return (
    <section className="container">
      <h2>Out of this World Ending!:</h2>
      <BreakCardMiddleRight
        content1="So, your players have cracked the case, tangled with the Rusty Spikes, and maybe even gotten their hands on a souped-up Skylark. Here's where you crank the neon to eleven and unleash the real mind-blower."
        content2="Maybe that pulsating billboard wasn't advertising a new brand of cigarettes, but a message from a visitor from outerspace. The possibilities are as limitless as the neon sky."
        image={mystery}
        imageAlt="alien wearing fedora"
      />

      <LeftCard content="Leave your players blinking, bewildered, and maybe even a little heartbroken (in the best way possible) when they finally hang up their Fedoras for the long night!" />
    </section>
  );
};

export default Ufo;
