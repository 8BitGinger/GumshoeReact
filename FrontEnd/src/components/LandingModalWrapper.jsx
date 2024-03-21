import React, { useState } from 'react';
import Modal from './LandingModal';
import Vid from '../assets/video/gumshoe-3d_animation.mp4';

const LandingModalWrapper = ({ children, initialState = true, modalTitle }) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="btn btn2" type="button" onClick={toggleModal}>
        {modalTitle || 'Open Video Modal'}
      </button>
      {isOpen && <Modal isOpen={isOpen} onClose={toggleModal} videoUrl={Vid} />}
    </>
  );
};

export default LandingModalWrapper;
