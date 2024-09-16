import blankBack from '../../assets//images/blank-back.png';

const AnimatedCardRight = ({
  imageAlt,
  image,
  content1,
  content2,
  imgClass,
}) => {
  return (
    <div className="card4 column">
      <div className="text">
        <p>
          {content1}
          <br />
          {content2}
        </p>
      </div>
      <div className="rel">
        <img src={blankBack} alt="logo background" />
        <img className={imgClass} src={image} alt={imageAlt} loading="lazy" />
      </div>
    </div>
  );
};

export default AnimatedCardRight;
