import React from 'react'
import { RichText } from 'prismic-reactjs'
import { activeTabClass, setLangCookie } from './utils'

const TabItem = ({ item, dictionary, index, activeTabIndex, setActiveLang }) => {
  // Define the code text from the dictionary
  const dicItem =
    dictionary ?
    dictionary.find(dicItem => RichText.asText(dicItem.key) === item.templating) :
    null
  let codeText = item.templating
  if (dicItem) {
    const label = RichText.asText(dicItem.label)
    codeText = label !== '' ? label : codeText
  }

  const activeClass = (index === activeTabIndex) ? activeTabClass : ''

  const switchActiveLang = (newActiveLang) => {
    setActiveLang(newActiveLang)
    setLangCookie(newActiveLang)
  }

  return (
    <li 
      data-value={item.templating}
      className={`tabs-item ${activeClass}`}
      onClick={() => switchActiveLang(item.templating)}
    >
      {codeText}
    </li>
  )
}

export default TabItem
