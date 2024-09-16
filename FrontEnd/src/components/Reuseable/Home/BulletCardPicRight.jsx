const BulletCardPicRight = ({ image, imageAlt, content }) => {
  return (
    <article className="column">
      <ul className="remove-bullet">
        {content.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <br />
          </>
        ))}
      </ul>
      <img src={image} alt={imageAlt} loading="lazy" />
    </article>
  );
};

export default BulletCardPicRight;
