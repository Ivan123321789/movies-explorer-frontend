import React from "react";
import './Checkbox.css';

function Checkbox({onCheck, searchShort}) {
  return (
    <div className='search-form__checkbox-block'>
      <label htmlFor='checkbox' 
      className='search-form__checkbox-label'>
        <input type='checkbox' 
        id='checkbox' 
        className='search-form__checkbox'
        checked={searchShort}
        onChange={() => onCheck(!searchShort)} />

        <div className='search-form__checkbox-toggle' />

        <span className='search-form__checkbox-text'>Короткометражки</span>
      </label>
    </div>    
  );
}

export default Checkbox