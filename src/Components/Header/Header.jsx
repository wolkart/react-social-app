import React from 'react'
import './Header.scss'

export const Header = () => {
  return <header className="Header">
    <div className="Container">
      <div className="Header__inner">
        <a href="/" className="Logo">
          <span className="Logo__image">
            <img src="https://bumper-stickers.ru/35276-thickbox_default/volk-iz-multfilma-jil-byl-pes.jpg" alt="Wolf social"/>
          </span>
          <span className="Logo__name">Заходи, если что...</span>
        </a>
      </div>
    </div>
  </header>
}