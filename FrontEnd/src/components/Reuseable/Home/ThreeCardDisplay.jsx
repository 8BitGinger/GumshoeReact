const ThreeCardDisplay = ({
  image1,
  imageAlt1,
  charDesc1,
  charName1,
  image2,
  imageAlt2,
  charDesc2,
  charName2,
  image3,
  imageAlt3,
  charDesc3,
  charName3,
}) => {
  return (
    <section className="container">
      <div className="column">
        <div className="left">
          <img src={image1} alt={imageAlt1} />
          <span className="italic bold">{charName1}</span> {charDesc1}
        </div>
        <div className="middle">
          <img src={image2} alt={imageAlt2} />
          <span className="italic bold">{charName2}</span> {charDesc2}
        </div>

        <div className="right">
          <img src={image3} alt={imageAlt3} />
          <span className="italic bold">{charName3}</span> {charDesc3}
        </div>
      </div>
    </section>
  );
};

export default ThreeCardDisplay;
