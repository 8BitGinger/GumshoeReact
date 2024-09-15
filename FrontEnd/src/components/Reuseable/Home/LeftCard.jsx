import React from 'react';

const LeftCard = ({ image, imageAlt, content, classMod }) => {
  return (
    <article className="column">
      {!image ? null : (
        <img
          className={!classMod ? null : classMod}
          src={image}
          alt={imageAlt}
        />
      )}
      <p>{content}</p>
    </article>
  );
};

export default LeftCard;
