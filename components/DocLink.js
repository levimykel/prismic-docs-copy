import React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'prismic-reactjs'

import { linkResolver, hrefResolver } from 'utils/linkResolver'

// Main DocLink component function for generating links to other pages on this site
const DocLink = ({ children, link, linkClass, ariaLabel }) => {
  if (link) {
    const linkUrl = Link.url(link, linkResolver)

    if (!linkUrl) {
      return (
        <a aria-label={ariaLabel} className={linkClass}>{children}</a>
      )
    }

    if (linkUrl.indexOf('http') === 0 || linkUrl.indexOf('mailto') === 0) {
      return (
        <a aria-label={ariaLabel} className={linkClass} href={linkUrl}>{children}</a>
      )
    }

    return (
      <NextLink
        as={linkUrl}
        href={Link.url(link, hrefResolver)}
        passHref
      >
        <a aria-label={ariaLabel} className={linkClass}>{children}</a>
      </NextLink>
    )
  }
  return null
}

export default DocLink
