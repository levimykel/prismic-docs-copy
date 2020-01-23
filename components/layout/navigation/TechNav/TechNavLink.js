import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'

const TechNavLink = ({ navLink, pageType }) => {
  const activeClass = navLink.link.type === pageType ? 'active' : ''
  const linkName = RichText.asText(navLink.name)

  return (
    <li className={activeClass}>
      <DocLink link={navLink.link} ariaLabel={linkName}>
        <div className="img" style={{ backgroundImage: `url(${navLink.icon.url})` }} />
        <span className="name">{linkName}</span>
      </DocLink>
    </li>
  )
}

export default TechNavLink
