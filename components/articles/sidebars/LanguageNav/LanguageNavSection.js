import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import LanguageNavLink from './LanguageNavLink'

const LanguageNavSection = ({ section, pageId }) => (
  <li>
    <DocLink link={section.primary.category_link}>
      {RichText.asText(section.primary.category_label)}
    </DocLink>
    <ul className="fields">
      {section.items.map((navLink, index) => (
        <LanguageNavLink
          navLink={navLink}
          pageId={pageId}
          key={`lang-nav-link-${index}`}
        />
      ))}
    </ul>
  </li>
)

export default LanguageNavSection
