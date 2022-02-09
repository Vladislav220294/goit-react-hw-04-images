import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import s from '../Modal/Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return (
      <div className={s.overlay} onClick={this.onOverlayClick}>
        <div className={s.modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
export default Modal;
