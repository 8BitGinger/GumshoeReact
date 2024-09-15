const BulletCardPic = ({ image, imageAlt, content }) => {
  return (
    <article className="column">
      <img src={image} alt={imageAlt} loading="lazy" />
      <ul className="remove-bullet">
        {content.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <br />
          </>
        ))}
      </ul>
    </article>
  );
};

export default BulletCardPic;
