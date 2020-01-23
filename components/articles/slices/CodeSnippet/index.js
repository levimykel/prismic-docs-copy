import React, { Fragment, useEffect, useState } from 'react'

import CodeBlock from './CodeBlock'
import MultipleSnippetBlock from './MultipleSnippetBlock'
import { codeLang, highlight } from './utils'
import { codeStyles } from 'styles'

// Code snippet slice component
const CodeSnippet = ({ slice, docType, dictionary, activeLang, setActiveLang }) => {
  const [activeLangTab, setActiveLangTab] = useState(0)

  // Once the component mounts, add highlight styles
  useEffect(() => highlight(), [])

  // Define the highlight.js language code if defined in ./utils.js
  const defaultHljs = codeLang.hasOwnProperty(docType) ? codeLang[docType] : ''

  // Set the active tab index
  const activeTabIndex = slice.items.findIndex(item => item.templating === activeLang)
  if (activeTabIndex !== -1 && activeTabIndex !== activeLangTab) {
    setActiveLangTab(activeTabIndex)
  }

  return (
    <Fragment>
      {renderCodeSlice(slice, defaultHljs, dictionary, activeLangTab, setActiveLang)}
      <style jsx global>{codeStyles}</style>
    </Fragment>
  )
}

// Render the code snippet slice depending on if there are multiple snippets or not
const renderCodeSlice = (slice, defaultHljs, dictionary, activeLangTab, setActiveLang) => {
  if (slice.items.length > 1) { // Render code switcher if applicable
    return (
      <MultipleSnippetBlock
        snippetBlocks={slice.items}
        defaultHljs={defaultHljs}
        dictionary={dictionary}
        activeLangTab={activeLangTab}
        setActiveLang={setActiveLang}
      />
    )
  } else if (slice.items.length === 1) { // Otherwise just the single code block
    return (
      <CodeBlock
        snippetBlock={slice.items[0]}
        defaultHljs={defaultHljs}
      />
    )
  }
  return null
}

export default CodeSnippet
