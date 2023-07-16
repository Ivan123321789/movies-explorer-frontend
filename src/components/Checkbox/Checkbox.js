import React from "react";
import './Checkbox.css';

function Checkbox() {
  return (
    <div className='search-form__checkbox-block'>
      <label htmlFor='checkbox' 
      className='search-form__checkbox-label'>
        <input type='checkbox' 
        id='checkbox' 
        className='search-form__checkbox' />

        <div className='search-form__checkbox-toggle' />

        <span className='search-form__checkbox-text'>Короткометражки</span>
      </label>
    </div>    
  );
}

export default Checkbox