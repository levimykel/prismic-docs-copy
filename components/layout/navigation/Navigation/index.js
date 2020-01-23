import React, { Fragment, useState } from 'react'
import { mainNavStyles } from 'styles'
import Menu from './Menu'

// Navigaton compontent function
const Navigation = ({ mainNav, loggedIn }) => {
  
  // Toggle the mobile menu
  const [menuToggle, setmenuToggle] = useState('')
  const toggleMenu = () => {
    setmenuToggle(menuToggle === '' ? 'is-open' : '')
  }

  return (
    <Fragment>
      <nav id="top" className="dark menu">
        <div className="navbar align-middle row">
          <a href="https://prismic.io/" className="brand">
            <img src="/doc-assets/images/logo-dark.svg" alt="Prismic" />
          </a>
          <ul className="menu-desktop align-right align-middle row">
            <Menu mainNav={mainNav} loggedIn={loggedIn} isMoble={false} />
          </ul>
          <div className={`menu-mobile column ${menuToggle}`}>
            <i className="icon-menu" onClick={toggleMenu} />
            <div className="menu-mobile-container small-12">
              <i className="icon-close" onClick={toggleMenu} />
              <Menu mainNav={mainNav} loggedIn={loggedIn} isMobile={true} />
            </div>
          </div>
        </div>
      </nav>
      <style jsx global>{mainNavStyles}</style>
    </Fragment>
  )
}

export default Navigation
