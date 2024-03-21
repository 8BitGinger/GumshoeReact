import React from 'react';
import whiskey from '../../assets/images/whiskey.jpg';

const introCard = () => {
  return (
    <section>
      <article className="card column">
        <p></p>
        <img src={whiskey} alt="whiskey and cigar" />
      </article>
    </section>
  );
};

export default introCard;
