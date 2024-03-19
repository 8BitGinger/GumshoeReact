import song from '../assets/audio/background2.mp3';
import { useState } from 'react';

const PlayAudio = () => {
  const audio = new Audio(song);
  audio.volume = 0.2;
  audio.loop = true;

  console.log('audio', audio);
  const [playing, setPlaying] = useState(false);

  if (playing) {
    audio.pause();
  } else {
    audio.play();
  }
  setPlaying(!playing);
};

export default PlayAudio;
