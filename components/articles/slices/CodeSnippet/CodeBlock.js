import React from 'react'
import { richTextAsText } from 'utils/htmlSerializer'

import CopyButton from './CopyButton'
import Snippet from './Snippet'
import { activeSnippetClass } from './utils'

const CodeBlock = (props) => {
  const {
    snippetBlock,
    defaultHljs,
    isMultiple = false,
    index,
    activeTabIndex
  } = props
  
  const activeClass =
    (isMultiple && index === activeTabIndex) ?
    activeSnippetClass :
    ''
  const multiClass =
    isMultiple ?
    `${snippetBlock.templating} tabs-content ${activeClass}` :
    ''
    
    const codeString = richTextAsText(snippetBlock.snippet, '\n') 

  return (
    <div 
      data-value={snippetBlock.templating}
      className={`doc-source-code ${multiClass}`}
    >
      <CopyButton codeString={codeString} />
      <Snippet
        snippetBlock={snippetBlock}
        codeString={codeString}
        defaultHljs={defaultHljs}
      />
    </div>
  )
}

export default CodeBlock
