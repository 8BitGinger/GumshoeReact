import React, { useState } from 'react';
import Player from 'react-player'; // Assuming you're using react-player
import Landing from '../pages/Landing';

const LandingModal = ({ isOpen, onClose, videoUrl }) => {
  // Handle modal visibility based on isOpen prop
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose && onClose(); // Call the external onClose function if provided
  };

  const handleVideoEnded = () => {
    // Restart the video playback when it finishes
    setIsOpen(true); // Keep the modal open for looping
  };

  return (
    <div className={`modal ${modalIsOpen ? 'show' : ''}`}>
      <button type="button" onClick={handleClose} className="modal-content">
        {isOpen && <Landing />}
      </button>
    </div>
  );
};

export default LandingModal;
