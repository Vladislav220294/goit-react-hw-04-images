import PropTypes from 'prop-types';
import { Component } from 'react/cjs/react.production.min';
import s from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    inputalue: '',
  };
  onInputValue = e => {
    this.setState({ inputalue: e.currentTarget.value.toLowerCase().trim() });
  };
  onImagesSubmit = e => {
    const { SubmitForm } = this.props;
    const { inputalue } = this.state;
    e.preventDefault();
    if (inputalue.trim() === '') {
      return alert('wrong name');
    }
    SubmitForm(inputalue);
    this.setState({ inputalue: '' });
  };
  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.onImagesSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchFormbutton}>
            <span className={s.searchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={this.onInputValue}
            value={this.state.inputalue}
            className={s.searchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  SubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;
