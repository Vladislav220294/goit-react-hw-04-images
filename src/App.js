import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGalleryList from './components/ImageGalleryList/ImageGalleryList.jsx';
import { ThreeDots } from 'react-loader-spinner';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';
import Fetch from './components/Fetch/Fetch';

class App extends Component {
  state = {
    images: [],
    inputalue: '',
    page: 1,
    showModal: false,
    largeImageURL: '',
    error: null,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.inputalue !== prevState.inputalue ||
      prevState.page !== this.state.page
    ) {
      this.setState(prevState => ({ isLoading: !prevState.isLoading }));

      Fetch(this.state.inputalue, this.state.page)
        .then(images => {
          if (images.length === 0) {
            throw new Error('some error');
          }
          this.setState(prevState => ({
            isLoading: !prevState.isLoading,
            images: [...prevState.images, ...images],
          }));
        })

        .catch(error => this.setState({ error }));
    }
    if (this.state.error !== prevState.error) {
      this.state.error && alert('wrong name');
      this.setState({ error: null, isLoading: false });
    }
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }
  getSnapshotBeforeUpdate() {
    return document.body.scrollHeight;
  }

  onLoadMore = () => {
    if (this.state.images) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  };

  toggleModal = largeImageURL => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL,
    }));
  };
  SubmitForm = inputalue => {
    if (this.state.inputalue === inputalue) {
      return;
    }
    this.setState({ inputalue, page: 1, images: [] });
  };
  render() {
    const { error, images, showModal, isLoading } = this.state;

    return (
      <div className="App">
        <Searchbar SubmitForm={this.SubmitForm} />
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
                toggleModal={this.toggleModal}
              />
              {isLoading && (
                <ThreeDots
                  heigth="100"
                  width="100"
                  color="blue"
                  ariaLabel="loading"
                />
              )}
              {images.length > 0 && <Button onLoadMore={this.onLoadMore} />}

              {showModal && (
                <Modal
                  largeImageURL={this.state.largeImageURL}
                  toggleModal={this.toggleModal}
                />
              )}
            </>
          )}
        </>
      </div>
    );
  }
}

export default App;
