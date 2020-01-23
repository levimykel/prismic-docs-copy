import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'

const LanguageNavLink = ({ navLink, pageId }) => {
  const activeClass = navLink.child_link.id === pageId ? 'active' : ''
  return (
    <li className={activeClass}>
      <DocLink link={navLink.child_link}>
        {RichText.asText(navLink.child_label)}
      </DocLink>
    </li>
  )
}

export default LanguageNavLink
