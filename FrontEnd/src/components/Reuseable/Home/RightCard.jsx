const RightCard = ({ image, imageAlt, content, classMod }) => {
  return (
    <article className="column">
      <p>{content}</p>
      <img
        classMod={!classMod ? null : classMod}
        src={image}
        alt={imageAlt}
        loading="lazy"
      />
    </article>
  );
};

export default RightCard;
