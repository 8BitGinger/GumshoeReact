import React from 'react';
import whiskey from '../../assets/images/whiskey.png';

const IntroST = () => {
  return (
    <>
      <article className="card column">
        <img src={whiskey} alt="mysterious men at bar" />

        <p>
          This story is best enjoyed with a fine cigar and some some brandy, but
          if you don&apos;t have those try playing the music and setting the
          scene. Just click the icon in the top-right corner, if you
          havne&apos;t already!
        </p>
      </article>
    </>
  );
};

export default IntroST;
