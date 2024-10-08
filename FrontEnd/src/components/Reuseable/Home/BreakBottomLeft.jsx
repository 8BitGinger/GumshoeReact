import React from 'react';

const BreakBottomLeft = ({ image, imageAlt, content, tagline }) => {
  return (
    <article className="column avatar">
      <img src={image} alt={imageAlt} loading="lazy" />
      <p>
        {content}
        <br />
        <br />
        {tagline}
      </p>
    </article>
  );
};

export default BreakBottomLeft;
