import React from 'react'
import TechNavLink from './TechNavLink'

const TechNavLinks = ({ techNav, pageType }) => {
  if (techNav) {
    return (
      techNav.map((navLink, index) => {
        return (
          <TechNavLink
            navLink={navLink}
            pageType={pageType}
            key={`tech-nav-link-${index}`}
          />
        )
      })
    )
  }
  return null
}

export default TechNavLinks
