import React from 'react';
import { Icon } from 'semantic-ui-react';

const introST = () => {
  return (
    <>
      <section className="modal-back">
        <div className="overlayModal">
          <article className="card pop-up">
            <p>
              Click the icon in the top-right start your journey as music leads
              takes you through the story of Gumshoe. Enjoy Neon City, where
              only the ones who can follow the rhythm hit the right note!
            </p>
            <button id="closeST" className="btn closeST">
              <Icon name="close" />
            </button>
          </article>
        </div>
      </section>
    </>
  );
};

export default introST;
