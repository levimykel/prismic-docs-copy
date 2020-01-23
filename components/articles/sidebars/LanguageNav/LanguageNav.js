import React, { useState } from 'react'

import LanguageNavSection from './LanguageNavSection'
import slideToggle from './slideToggle'
import windowResize from 'utils/hooks/windowResize'
import { languageNavStyles } from 'styles'

// Language navigation sidebar component
const LanguageNav = ({ sideNavigation, pageId, sidebarNavRef }) => {
  const [menuToggle, setmenuToggle] = useState('')

  // Display the sidebar if window is resized over mobile breakpoint
  windowResize(
    ({ width }) => {
      if (width >= 640) {
        sidebarNavRef.current.style.display = null
      }
    },
    [menuToggle],
    350
  )

  // Toggle the mobile menu
  const toggleMenu = () => {
    setmenuToggle(menuToggle === '' ? 'is-open' : '')
    slideToggle(sidebarNavRef, 500)
  }

  return (
    <div className="column navbar-wrapper small-12 medium-4 large-3">
      <div className="navbar-mobile-toggle" onClick={toggleMenu}>More articles</div>
      <nav
        id="language-nav"
        className={menuToggle}
        ref={sidebarNavRef}
      >
        <ul>
          {
            sideNavigation && sideNavigation.data ?
            sideNavigation.data.body.map((section, index) => (
              <LanguageNavSection
                section={section}
                pageId={pageId}
                key={`lang-nav-section-${index}`}
              />
            )) : 
            null
          }
        </ul>
      </nav>
    <style jsx global>{languageNavStyles}</style>
    </div>
  )
}

export default LanguageNav
