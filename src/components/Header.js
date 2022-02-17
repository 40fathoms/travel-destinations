import React from 'react'

import Globe from '../images/globe.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-icon">
          <img src={Globe} alt="Globe"/>
          <h1>my travel destinations</h1>
      </div>
    </header>
  )
}

export default Header