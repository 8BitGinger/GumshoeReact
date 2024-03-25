import { useState } from 'react';
import Landing from '../pages/Landing';

const LandingModal = ({ isOpen, onClose, videoUrl }) => {
  // Handle modal visibility based on isOpen prop
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const handleClose = () => {
    setModalIsOpen(false);
    onClose && onClose(); // Call the external onClose function if provided
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
