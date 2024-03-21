import React from 'react';
import Modal from './modal';

const introST = () => {
  return (
    <>
      <article className="card column">
        <p>
          This story is best enjoyed with a fine cigar and some some brandy, but
          if you don&apos;t have those try playing the music and setting the
          scene. Just click the icon in the top-right corner!
        </p>
        {/* <img src={barmen} alt="mysterious men at bar" /> */}
      </article>
      <button className="btn openModalBtn">Open</button>
    </>
  );
};

export default introST;
