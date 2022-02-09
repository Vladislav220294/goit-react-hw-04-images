import PropTypes from 'prop-types';
import { useEffect } from 'react';
import s from '../Modal/Modal.module.css';

const Modal = ({ toggleModal, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
  const onKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <div className={s.overlay} onClick={onOverlayClick}>
      <div className={s.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default Modal;
