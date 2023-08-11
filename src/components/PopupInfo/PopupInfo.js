import React from 'react';
import './PopupInfo.css';

function PopupInfo({isOpen, onClose, message}) {
  return (
    <div className={`popup-info ${isOpen && 'popup-info_opened'}`} aria-label="информация о регистрации">
      <div className="popup-info__container">
        <h3 className="popup-info__text">{message}</h3>
        <button
          type="button"
          className="popup-info__close-icon"
          onClick={onClose}
          aria-label="закрыть попап"
          title="закрыть попап" />
      </div>
    </div>
  );
}

export default PopupInfo;