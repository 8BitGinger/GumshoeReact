import React from 'react';

const LeftCard = ({ image, imageAlt, content, classMod }) => {
  return (
    <article className="column">
      {!image ? null : (
        <img
          className={!classMod ? null : classMod}
          src={image}
          alt={imageAlt}
          loading="lazy"
        />
      )}
      <p>{content}</p>
    </article>
  );
};

export default LeftCard;
