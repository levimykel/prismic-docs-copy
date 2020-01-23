import React from 'react'
import { default as NextLink } from 'next/link'
import { Link } from 'prismic-reactjs'

import { footerLinkResolver } from 'utils/linkResolver'

const FooterLink = ({ footerLink }) => {
  const linkUrl = Link.url(footerLink.link, footerLinkResolver)
  if (linkUrl.indexOf('http') === 0 || linkUrl.indexOf('mailto') === 0) {
    return (
      <li><a href={linkUrl}>{footerLink['link-label']}</a></li>
    )
  }
  
  return (
    <li>
      <NextLink
        as={linkUrl}
        href={linkUrl}
        passHref
      >
        <a>{footerLink['link-label']}</a>
      </NextLink>
    </li>
  )
}

export default FooterLink
