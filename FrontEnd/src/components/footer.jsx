import { Icon } from 'semantic-ui-react';

const footer = () => {
  return (
    <footer className="footer">
      <a href="#top">
        <button id="topBtn" className="btn btn-foot">
          <Icon name="arrow up" />
          <br></br>
          Back to Top
        </button>
      </a>
    </footer>
  );
};

export default footer;
