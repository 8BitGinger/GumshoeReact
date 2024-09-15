import React from 'react';

const BreakCardMiddleLeft = ({ content1, content2, image, imageAlt }) => {
  return (
    <article className="column avatar">
      <img src={image} alt={imageAlt} loading="lazy" />
      <p>
        {content1}
        <br />
        <br />
        {content2}
      </p>
    </article>
  );
};

export default BreakCardMiddleLeft;
