import React from 'react'
import { RichText } from 'prismic-reactjs'

import LinkWrapper from './LinkWrapper'
import CtaLink from './CtaLink'
import { DocLink } from 'components'

const Menu = ({ mainNav, loggedIn, isMobile = false }) => {
  let menuLinks = []

  // Add the links from Prismic
  if (mainNav) {
    menuLinks = mainNav.map((menuLink, index) => (
      <LinkWrapper isMobile={isMobile} key={`main-nav-${index}`}>
        <DocLink link={menuLink.link}>{RichText.asText(menuLink.label)}</DocLink>
      </LinkWrapper>
    ))
  }
  
  // Add the Login link if not logged in
  if (!loggedIn) {
    menuLinks.push(
      <LinkWrapper isMobile={isMobile} key="main-nav-login">
        <a href="https://prismic.io/dashboard/">Login</a>
      </LinkWrapper>
    )
  }

  // Add the CTA link
  menuLinks.push(
    <LinkWrapper isMobile={isMobile} key="main-nav-cta">
      <CtaLink loggedIn={loggedIn} />
    </LinkWrapper>
  )

  return menuLinks
}

export default Menu
