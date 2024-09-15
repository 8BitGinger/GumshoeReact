const RightCard = ({ image, imageAlt, content, classMod }) => {
  return (
    <article className="column">
      <p>{content}</p>
      <img classMod={!classMod ? null : classMod} src={image} alt={imageAlt} />
    </article>
  );
};

export default RightCard;
