import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm() {
    return (
        <>
            <form className='search-form'>
                <div className='search-form__input-block'>
                    <div className='search-form__img'></div>
                    <input type='search' 
                    className='search-form__input'
                    placeholder='Фильм'
                    required />
                    <button type='submit' className='search-form__button'/>
                </div>
                <Checkbox /> 
            </form>
            <div className='search-form__underline'></div>
        </>
    )
}

export default SearchForm;