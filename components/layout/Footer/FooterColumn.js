import React from 'react'
import { RichText } from 'prismic-reactjs'
import FooterLink from './FooterLink'

const FooterColumn = ({ column }) => (
  <div className="column small-order-1 medium-order-2 small-4 medium-3">
    <span className="title">{RichText.asText(column.primary['title-column'])}</span>
    <ul>
      {column.items.map((link, index) => (
        <FooterLink footerLink={link} key={`lang-nav-link-${index}`} />
      ))}
    </ul>
  </div>
)

export default FooterColumn
