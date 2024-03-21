import gear from '../../assets/images/gear.png';
import NeonCityCharSheet from '../../assets/downloads/NeonCity-CharSheet.pdf';
import NeonCityStarterAdventure from '../../assets/downloads/NeonCity-StarterAdventure.pdf';
import documentLogoSepia2 from '../../assets/images/document-logo-sepia2.png';

const stDownloads = () => {
  return (
    <section className="container spacer spacer-top">
      <h3 id="downloads">Downloads</h3>
      <h2>
        Current Story: Neon City
        <br />
        Current Chapter: Chapter 1: Neon Charade
      </h2>

      <div className="row3">
        <div className="col3">
          <p className="card5 skew">
            <span className="col">
              <img className="avatar3" src={gear} alt="1930s gear" />

              <a href={NeonCityCharSheet} download>
                ✓ Character Sheet
              </a>

              <a href={NeonCityStarterAdventure} download>
                ✓ Starter Adventure
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

export default stDownloads;
