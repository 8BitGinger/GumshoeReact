import song from '../assets/audio/background2.mp3';
import { useState } from 'react';

const PlayMe = () => {
  const [play, setPlay] = useState(false);
  const [audio] = useState(new Audio(song));

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
      <button onClick={togglePlay}>
        {play ? 'Pause Background Music' : 'Play Background Music'}
      </button>
    </div>
  );
};

export default PlayMe;
