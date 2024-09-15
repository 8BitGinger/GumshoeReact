import React from 'react';

const SplitCard = ({ leftHalf, rightHalf }) => {
  return (
    <article className="card column">
      <div className="half">{leftHalf}</div>
      <div className="half">{rightHalf}</div>
    </article>
  );
};

export default SplitCard;
