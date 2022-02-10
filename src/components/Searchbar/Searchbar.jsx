import PropTypes from 'prop-types';
import { useState } from 'react';

import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({SubmitForm}) => {
  const [inputalue, setInputalue] = useState('');
  
const  onInputValue = e => {
  const inputalue = e.currentTarget.value.toLowerCase().trim();
    setInputalue(inputalue)
    
  };
 const onImagesSubmit = e => {
    
    e.preventDefault();
    if (inputalue.trim() === '') {
      return alert('wrong name');
    }
    SubmitForm(inputalue);
    setInputalue('')
    
  };
  
    return (
      <header className={s.searchbar}>
        <form onSubmit={onImagesSubmit} className={s.searchForm}>
          <button type="submit" className={s.searchFormbutton}>
            <span className={s.searchFormbuttonlabel}>Search</span>
          </button>

          <input
            onChange={onInputValue}
            value={inputalue}
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
Searchbar.propTypes = {
  SubmitForm: PropTypes.func.isRequired,
};
export default Searchbar;
