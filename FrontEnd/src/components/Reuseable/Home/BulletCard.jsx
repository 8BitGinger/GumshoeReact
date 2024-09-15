const BulletCard = ({ title, subtitle, content, footTag, classBullet }) => {
  return (
    <div className="card4">
      <div className="bold column">{title}</div>
      <br />
      <br />
      <span className="underline">{subtitle}</span>
      <ul className={!classBullet ? null : classBullet}>
        {content.map((item, index) => (
          <>
            <li className="lowLight" key={index}>
              {item}
            </li>
            <br />
          </>
        ))}
      </ul>
      <span className="italic"> {footTag}</span>{' '}
    </div>
  );
};

export default BulletCard;
