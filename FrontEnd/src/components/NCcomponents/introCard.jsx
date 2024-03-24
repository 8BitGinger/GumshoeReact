import agents2 from '../../assets/images/agents2.jpg';
import Player from 'react-player'; // Assuming you're using react-player

import videoUrl from '../../assets/video/gumshoe-3d_animation.mp4';

const introCard = () => {
  return (
    <div>
      <section className="container" id="introCard">
        <h2>The World of Gumshoe:</h2>

        <article className="card column">
          <p>
            Here in Neon City and other locations in the World of Gumshoe, the
            streets are mean, the things are stranger than fiction . This world
            is full of unexplainable events, mystery, and danger. The only thing
            you can count on is that nothing is as it seems. So Welcome, to Neon
            City Partner!
          </p>
          <div className="video">
            <Player
              url={videoUrl}
              controls={true} // Allow user control after initial playback
              muted={true}
              playing={true}
            ></Player>
          </div>
        </article>
      </section>
    </div>
  );
};

export default introCard;
