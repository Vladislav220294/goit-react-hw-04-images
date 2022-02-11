import { useEffect, useState, useRef } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGalleryList from './components/ImageGalleryList/ImageGalleryList.jsx';
import { ThreeDots } from 'react-loader-spinner';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';
import Fetch from './components/Fetch/Fetch';

const App = () => {
  const [images, setImages] = useState([]);
  const [inputalue, setInputalue] = useState('indonesia');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    Fetch(inputalue, page)
      .then(images => {
        if (images.length === 0) {
          throw new Error('some error');
        }

        setImages(prev => [...prev, ...images]);

        setIsLoading(false);
      })
      .catch(error => setError(error));
  }, [inputalue, page]);

  useEffect(() => {
    error && alert('wrong name');
    setIsLoading(false);
  }, [error]);

  useEffect(() => {
    window.scrollTo({
      top: scrollRef.current,
      behavior: 'smooth',
    });
  }, [images]);

  const onLoadMore = () => {
    scrollRef.current = document.body.scrollHeight;
    if (images) {
      setPage(page => page + 1);
    }
  };

  const toggleModal = largeImageURL => {
    setShowModal(showModal => !showModal);
    setLargeImageURL(largeImageURL);
  };
  const SubmitForm = param => {
    if (inputalue === param) {
      return;
    }
    setError(null);
    setInputalue(param);
    setPage(1);
    setImages([]);
  };

  return (
    <div className="App">
      <Searchbar SubmitForm={SubmitForm} />
      <>
        {error ? (
          <>
            <h1>Some issue has occured</h1>
          </>
        ) : (
          <>
            <ImageGalleryList
              images={images}
              showModal={showModal}
              toggleModal={toggleModal}
            />
            {isLoading && (
              <ThreeDots
                heigth="100"
                width="100"
                color="blue"
                ariaLabel="loading"
              />
            )}
            {images.length > 0 && images.length % 12 === 0 && (
              <Button onLoadMore={onLoadMore} />
            )}

            {showModal && (
              <Modal largeImageURL={largeImageURL} toggleModal={toggleModal} />
            )}
          </>
        )}
      </>
    </div>
  );
};

export default App;
