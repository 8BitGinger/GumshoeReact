import song from '../assets/audio/background2.mp3';
import { useState } from 'react';
import { Icon } from 'semantic-ui-react';

const PlayMe = () => {
  const [play, setPlay] = useState(false);
  const [audio] = useState(new Audio(song));

  audio.volume = 0.2;
  audio.loop = true;

  const togglePlay = () => {
    setPlay(!play);
    if (!play) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="play-me">
      <div onClick={togglePlay}>
        {play ? (
          <>
            <Icon className="playIcon" name="music" />

            <Icon className="playIcon" name="pause" />
          </>
        ) : (
          <>
            <Icon className="playIcon" name="music" />

            <Icon className="playIcon" name="play" />
          </>
        )}
      </div>
    </div>
  );
};

export default PlayMe;
