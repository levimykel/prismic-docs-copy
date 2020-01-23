import React from 'react'
import { Elements } from 'prismic-reactjs'
import TocLink from './TocLink'

const TocLinks = ({ sliceZone }) => {
  // Initialize the slice index for the page anchor links 
  let sliceIndex = -1

  return sliceZone.map((slice, index) => {
    // Increase the slice index by the number of items in the slice
    sliceIndex+= slice.value ? slice.value.length : slice.items.length
    
    const sliceType = slice.slice_type

    if (sliceType === 'text') {

      // Get the text content depending on the slice type
      const textContent = slice.primary.content

      return textContent.map((block, blockIndex) => {
        if (block.type === Elements.heading2 || block.type === Elements.heading3) {
          return (
            <TocLink
              textBlock={block}
              sliceIndex={sliceIndex}
              blockIndex={blockIndex}
              key={`toc-link-${index}-${blockIndex}`}
            />
          )
        }
        return null
      })
    }
    return null
  })
}

export default TocLinks
