import React from 'react';
import brandy from '../../assets/images/whiskey.png';

const Brandy = () => {
  return (
    <section>
      <article className="card column">
        <p>
          This Story is best enjoyed with a fine cigar and smooth cup of brandy,
          but if you don&apos;t have any of those, try setting the scene with
          some music. Just click the music icon in the upper right corner if you
          haven&apos;t already.{' '}
        </p>
        <img src={brandy} alt="men in fedoras" />
      </article>
    </section>
  );
};
export default Brandy;
