import React, { useState, useEffect, useRef } from 'react';
import Modal from './LandingModal';

const LandingModalWrapper = ({ children, initialState, modalTitle }) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track first load state

  console.log(isFirstLoad);

  useEffect(() => {
    if (isFirstLoad === true) {
      setIsOpen(true);
    }

    if (isFirstLoad === false) {
      setIsOpen(false);
    }
  }, [isFirstLoad]);

  // const changeState = () => {
  //   setTimeout(() => {
  //     setIsFirstLoad(false);
  //   }, 15000);
  // };

  // Dependency on isFirstLoad state

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="landModal"
        className="btn btn2"
        type="button"
        onClick={toggleModal}
      >
        {modalTitle || 'Gumshoe Clue Screen'}
      </button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          initialState={initialState}
          onClose={toggleModal}
          isFirstLoad={isFirstLoad}
        />
      )}
    </>
  );
};

export default LandingModalWrapper;
