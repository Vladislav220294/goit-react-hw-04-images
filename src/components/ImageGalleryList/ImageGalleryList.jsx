import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGalleryList/ImageGalleryList.module.css';

const ImageGalleryList = ({ images, showModal, toggleModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          showModal={showModal}
          toggleModal={toggleModal}
          key={images.indexOf(image)}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
ImageGalleryList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
export default ImageGalleryList;
