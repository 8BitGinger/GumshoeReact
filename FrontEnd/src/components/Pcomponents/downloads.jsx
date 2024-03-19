import gear from '../../assets/images/gear.png';
import CharSheet from '../../assets/downloads/NeonCity-CharSheet.pdf';
import documentLogoSepia2 from '../../assets/images/document-logo-sepia2.png';

const downloads = () => {
  return (
    <section className="container spacer spacer-top">
      <h3 id="downloads">Downloads</h3>
      <div className="row3">
        <div className="col3">
          <p className="card5 skew">
            <span className="intro overlay2">
              Gumshoe
              <img className="avatar3" src={gear} alt="1930s gear" />
              <a href={CharSheet} download>
                ✓ Character Sheet
              </a>
            </span>
          </p>
        </div>
        <div className="col3">
          <img className="logoP" src={documentLogoSepia2} alt="gumshoe logo" />{' '}
        </div>
      </div>
    </section>
  );
};

export default downloads;
