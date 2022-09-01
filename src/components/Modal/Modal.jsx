import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const rootModal = document.querySelector('#root-modal');

const Modal = ({ largeImage, tag, onClose }) => {
  useEffect(() => {
    const handlePressEscape = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handlePressEscape);

    return () => {
      window.removeEventListener('keydown', handlePressEscape);
    };
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target !== e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalWindow>
        <img src={largeImage} alt={tag} />
      </ModalWindow>
    </Backdrop>,
    rootModal
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export { Modal };
