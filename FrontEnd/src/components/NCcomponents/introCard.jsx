import agents2 from '../../assets/images/agents2.jpg';
import Player from 'react-player'; // Assuming you're using react-player
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import videoUrl from '../../assets/video/gumshoe-3d_animation.mp4';
import VidCardRight from '../Reuseable/Home/VidCardRight';

const introCard = () => {
  return (
    <div>
      <section className="container" id="introCard">
        <h2>The World of Gumshoe:</h2>

        <VidCardRight
          content="Here in Neon City and other locations in the World of Gumshoe, the
            streets are mean, the things are stranger than fiction . This world
            is full of unexplainable events, mystery, and danger. The only thing
            you can count on is that nothing is as it seems. So Welcome, to Neon
            City Partner!"
          videoUrl={videoUrl}
          volMod={true}
        />
      </section>
    </div>
  );
};

export default introCard;
