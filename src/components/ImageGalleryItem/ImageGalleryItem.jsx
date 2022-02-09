import PropTypes from 'prop-types';
import s from './/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ toggleModal, webformatURL, largeImageURL }) => {
  return (
    <>
      <li className={s.imageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={s.imageGalleryItemimage}
          onClick={() => toggleModal(largeImageURL)}
        />
      </li>
    </>
  );
};
ImageGalleryItem.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
