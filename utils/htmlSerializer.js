import React from 'react'
import Router from 'next/router'
import { Elements } from 'prismic-reactjs'

import { linkResolver, hrefResolver } from './linkResolver'

/**
 * Handler that will do routing imperatively on internal links.
 * @param    {string}  nextHref    Next.js href route
 * @param    {string}  displayUrl  Url to be displayed to the user
 * @returns  {function}            onClick handler function
 */
const onClickHandler = (nextHref, displayUrl) => {
  return e => {
    e.preventDefault()
    Router.push(nextHref, displayUrl)
  }
}

/**
 * Create the onClick props for an element.
 * @param    {Object}  link  Prismic link object
 * @returns  {Object}        onClick props for link elements
 */
const getClickProps = (link) => {
  const nextHref = hrefResolver(link)
  const displayUrl = linkResolver(link)
  return {
    onClick: onClickHandler(nextHref, displayUrl),
    href: displayUrl
  }
}

/**
 * Add a unique key prop to the existing props.
 * @param    {Object}  props  Current props for the element
 * @param    {string}  key    Unique key to add to the element props
 * @returns  {Object}         New props object with key
 */
export const propsWithUniqueKey = (props = {}, key) => {
  return Object.assign(props, { key })
}

/**
 * General html serializer to apply an onClick event that will
 * imperatively route links to internal pages.
 * 
 * @param    {string}  type      Prismic Rich Text element type
 * @param    {Object}  element   Element data
 * @param    {string}  content   Text content of basic element types
 * @param    {array}   children  Children elements for the current element
 * @param    {string}  key       Unique key for the element
 * @returns  {Object}            New React element or null
 */
export const htmlSerializer = (type, element, content, children, key) => {
  let props = {}

  switch (type) {
    case Elements.hyperlink:
      if (element.data.link_type === 'Document') { 
        props = getClickProps(element.data)
      } else {
        // Default link handling
        const targetAttr = element.data.target ? { target: element.data.target } : {}
        const relAttr = element.data.target ? { rel: 'noopener' } : {}
        props = Object.assign({
          href: element.data.url || linkResolver(element.data)
        }, targetAttr, relAttr)
      }
      return React.createElement('a', propsWithUniqueKey(props, key), children)

    default:
      return null
  }
}

/**
 * Convert Rich Text to plain text with option for how to join.
 * @param    {array}   richtext    Array of Rich Text element blocks
 * @param    {string}  joinString  String used to join the text in different blocks
 * @returns  {string}              Combined text
 */
export const richTextAsText = (richtext, joinString) => {
  const join = typeof joinString === 'string' ? joinString : ' '
  return richtext.map(block => block.text).join(join)
}

export default htmlSerializer
