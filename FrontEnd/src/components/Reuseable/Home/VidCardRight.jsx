import React from 'react';
import Player from 'react-player'; // Assuming you're using react-player
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const VidCardRight = ({ volMod, content, videoUrl }) => {
  return (
    <article className="col2">
      <div className="video-container">
        <LazyLoadComponent>
          <Player
            className="video"
            url={videoUrl}
            controls={true} // Allow user control after initial playback
            muted={!volMod ? true : volMod}
          ></Player>
        </LazyLoadComponent>
      </div>
      <p>{content}</p>
    </article>
  );
};

export default VidCardRight;
