import React, { useState } from 'react';
import Player from 'react-player'; // Assuming you're using react-player

const Modal = ({ isOpen, onClose, videoUrl }) => {
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
      <div className="modal-content">
        {isOpen && (
          <Player
            url={videoUrl}
            controls={false} // Allow user control after initial playback
            width="100%"
            height="auto"
            muted={isOpen} // Mute the video only when the modal is open
            playing={isOpen}
            onEnded={handleVideoEnded} // Autoplay only when the modal is open
          />
        )}
        <button className="btn btn-close" type="button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
