import agents2 from '../../assets/images/agents2.jpg';
import RightCard from '../Reuseable/Home/RightCard';

const penrose = () => {
  return (
    <section className="container" id="penrose">
      <h2>The Penrose Division:</h2>

      <RightCard
        image={agents2}
        content="The Bureau boys with their fancy new Penrose Division werent playing by the Queensbury rules. These spooks, with their flashy
            triangular badges and nervous habits – muttering to their badges
            like cornered rats – were always a step behind me, and somehow a
            step ahead. They lurked in the shadows like phantoms, their presence
            a cold wind chilling the back of your neck right when you thought
            you were hot on the trail. The FBI sure as hell wasn't sharing their secrets, and judging by the shifty way these agents operated, those secrets were darker than a moonless night in an alley. One thing for sure you better do your best to stay out of their cross-hairs, or might be taking a long walk off a short pier. But then again, maybe a player could use them to their advantage. After all, the enemy of my enemy is my friend, right?"
        imageAlt="penrose agents"
      />
    </section>
  );
};

export default penrose;
