import React from 'react'
import { Elements } from 'prismic-reactjs'
import { generateTocAnchorID } from 'utils/anchorLinkSerializer'

const TocLink = ({ textBlock, sliceIndex, blockIndex }) => {
  const linkClass = textBlock.type === Elements.heading3 ? 'headingParagraph' : 'headingSection'
  const anchorLink = `#${generateTocAnchorID(textBlock.text, sliceIndex, blockIndex)}`
  
  return (
    <li className={linkClass}>
      <a href={anchorLink}>{textBlock.text}</a>
    </li>
  )
}

export default TocLink
