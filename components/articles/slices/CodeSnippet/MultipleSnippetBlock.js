import React from 'react'
import CodeBlock from './CodeBlock'
import TabItem from './TabItem'

const MultipleSnippetBlock = (props) => {
  const { snippetBlocks, defaultHljs, dictionary, activeLangTab, setActiveLang } = props

  return (
    <div className="tabs doc-define-code-tmpl">
      <ul className="tabs-items">
        {snippetBlocks.map((item, index) => (
          <TabItem
            item={item}
            dictionary={dictionary}
            index={index}
            activeTabIndex={activeLangTab}
            setActiveLang={setActiveLang}
            key={`tab-item-${index}`}
          />
        ))}
      </ul>
      {snippetBlocks.map((snippetBlock, index) => (
        <CodeBlock
          snippetBlock={snippetBlock}
          defaultHljs={defaultHljs}
          isMultiple={true}
          index={index}
          activeTabIndex={activeLangTab}
          key={`tab-content-${index}`}
        />
      ))}
    </div>
  )
}

export default MultipleSnippetBlock
