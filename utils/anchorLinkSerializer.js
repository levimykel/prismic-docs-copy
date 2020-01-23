import React from 'react'
import { Elements } from 'prismic-reactjs'
import { htmlSerializer, propsWithUniqueKey } from './htmlSerializer'

/**
 * Generates the Table of Contents anchor link ID text.
 * @param    {string}  text        Header text to be transformed into an anchor link ID
 * @param    {number}  sliceIndex  Index of the slice where the header was found
 * @param    {number}  blockIndex  Index of the Rich Text block where the header was found
 * @returns  {string}              ID for the table of contents anchor link
 */
export const generateTocAnchorID = (text, sliceIndex, blockIndex) => {
  return `${sliceIndex}_${blockIndex}-${text.replace(/[^\w\. ]/g, '').replace(/\s/g, '-').toLowerCase()}`
}

/**
 * HTML Serializer to add anchor links to h2 and h3 headings.
 * @param    {number}  sliceIndex  Index of the slice where the header was found
 * @returns  {function}            HTML Serializer function with the added slice index
 */
export const anchorLinkSerializer = (sliceIndex = 0) => {
  return (type, element, content, children, key) => {
    let id = ''
    switch (type) {
      case Elements.heading2: // H2 heading adds id for TOC
        id = generateTocAnchorID(element.text, sliceIndex, key)
        return React.createElement('h2', propsWithUniqueKey({ id }, key), children)

      case Elements.heading3: // H3 heading adds id for TOC
        id = generateTocAnchorID(element.text, sliceIndex, key)
        return React.createElement('h3', propsWithUniqueKey({ id }, key), children)

      default:
        return htmlSerializer(type, element, content, children, key)
    }
  }
}

export default anchorLinkSerializer
