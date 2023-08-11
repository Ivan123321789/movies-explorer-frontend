import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';
import { useForm } from '../../hooks/useForm';

function SearchForm({ onSearch, savedSearchSymbols, savedSearchShortMovies }) {
  const [searchKey, setSearchKey] = useState(savedSearchSymbols);
  const [searchShort, setSearchShort] = useState(savedSearchShortMovies);
  const { values, handleChange } = useForm({ searchPlace: '' });
  
  function onChange(evt) {
    setSearchKey(evt.target.value);
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch(searchKey, searchShort);
  }

  function handleCheckbox(checkStatus) {
    onSearch(searchKey, checkStatus);
    setSearchShort(checkStatus);
  }
  return (
    <section className='search'>
      <form className='search__form search-form' onSubmit={handleSubmit} noValidate>
        <div className='search-form__input-block'>
          <div className='search-form__img'></div>
          <input type='search'
            name='searchPlace'
            className='search-form__input'
            placeholder='Фильм'
            value={searchKey || values.searchPlace}
            onChange={onChange}
          />
          <button type='submit' className='search-form__button' />
        </div>
        <Checkbox onCheck={handleCheckbox} searchShort={searchShort} />
      </form>
      <div className='search__underline'></div>
    </section>
  )
}

export default SearchForm;