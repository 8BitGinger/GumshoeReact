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
    <header className={`modal ${modalIsOpen ? 'show' : ''}`}>
      <button className="modal-content" type="button" onClick={handleClose}>
        {isOpen && (
          <div>
            <section className="container" id="introCard">
              <h2>The World of Gumshoe:</h2>

              <article className="card row3">
                <p>
                  Here in Neon City and other locations in the World of Gumshoe,
                  the streets are mean, the things are stranger than fiction .
                  This world is full of unexplainable events, mystery, and
                  danger. The only thing you can count on is that nothing is as
                  it seems. So Welcome, to Neon City Partner!
                </p>

                <Player
                  url={videoUrl}
                  controls={true} // Allow user control after initial playback
                  width="100%"
                  height="auto"
                  muted={isOpen} // Mute the video only when the modal is open
                  playing={isOpen}
                  onEnded={handleVideoEnded} // Autoplay only when the modal is open
                ></Player>
              </article>
            </section>
          </div>
        )}
      </button>
    </header>
  );
};

export default Modal;
