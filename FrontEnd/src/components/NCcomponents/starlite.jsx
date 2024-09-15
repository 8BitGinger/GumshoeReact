import starlitePic from '../../assets/images/starlite.png';
import RightCard from '../Reuseable/Home/RightCard';

const starlite = () => {
  return (
    <div>
      <section className="container" id="starlite">
        <h2>The Starlite Motel:</h2>

        <RightCard
          image={starlitePic}
          imageAlt="Handsome Bob and Daughter Adriana"
          content="Unlike its flashy cousins downtown, the Starlite wasn't a beacon of dazzling lights. Its faded neon sign, a lonely astronaut holding a flickering star, cast an ethereal glow on the peeling turquoise paint. Inside, the air hung thick with the scent of stale coffee and something that vaguely resembled disinfectant. Run by the smiling man Handsome Bob and his constant companion, his
            daughter, Adriana. Barely a pre-teen, she possessed a wisdom beyond
            her years. Her dark eyes held a spark of defiance, a reminder of the
            struggles they'd faced together. She kept the Starlite running
            with a quiet efficiency.  The Starlite Motel wasn't glamorous, but it offered a flicker
            of solace, shimmering faintly like the lonely star on the
            motel's faded sign."
        />
      </section>
    </div>
  );
};

export default starlite;
