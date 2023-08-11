import React from 'react';
import './MoreFilmsButton.css';

function MoreFilmsButton({onClickMore}) {
  function handleMore() {
    onClickMore()
  }
  
  return (
    <>
      <button type='button' className='movies__more-button' onClick={handleMore}>Ещё</button>
    </>
  )
}

export default MoreFilmsButton