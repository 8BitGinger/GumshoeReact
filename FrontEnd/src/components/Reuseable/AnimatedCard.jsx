import blankBack from '../../assets//images/blank-back.png';

const AnimatedCard = ({ imageAlt, image, content1, content2, imgClass }) => {
  return (
    <div className="card4 column">
      <div className="rel">
        <img src={blankBack} alt="logo background" />
        <img className={imgClass} src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="text">
        <p>
          {content1}
          <br />
          {content2}
        </p>
      </div>
    </div>
  );
};

export default AnimatedCard;
