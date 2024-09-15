import React from 'react';

const BreakCardMiddleRight = ({ content1, content2, image, imageAlt }) => {
  return (
    <article className="column avatar">
      <p>
        {content1}
        <br />
        <br />
        {content2}
      </p>
      <img src={image} alt={imageAlt} loading="lazy" />
    </article>
  );
};

export default BreakCardMiddleRight;
