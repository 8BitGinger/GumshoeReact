import DownloadBook from '../DownloadBook';

const stDownloads = () => {
  return (
    <section className="container spacer spacer-top">
      <h3 id="downloads">Downloads</h3>
      <h2>
        Current Story: Neon City
        <br />
        Current Chapter: Chapter 1: Neon Charade
      </h2>
      <div className="card7">
        <DownloadBook />
      </div>
    </section>
  );
};

export default stDownloads;
