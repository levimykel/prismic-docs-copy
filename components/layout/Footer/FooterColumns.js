import React from 'react'
import FooterColumn from './FooterColumn'

const FooterColumns = ({ footer }) => {
  if (footer) {
    return footer.map((column, index) => (
      <FooterColumn column={column} key={`footer-column-${index}`} />
    ))
  }
  return null
}

export default FooterColumns
