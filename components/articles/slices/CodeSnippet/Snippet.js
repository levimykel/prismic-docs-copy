import React from 'react'

const Snippet = ({ snippetBlock, codeString, defaultHljs }) => {
  const lineBreaks = codeString.match(/\n/g)||[]
  const singleClass = lineBreaks.length === 0 ? 'single-line' : ''

  // Use default hljs code unless specified
  let hljsCode = defaultHljs
  switch (snippetBlock.hljs_code) {
    case null:
    case '':
    case 'default':
      hljsCode = defaultHljs
      break
    case 'auto':
      hljsCode = ''
      break
    default:
      hljsCode = snippetBlock.hljs_code
      break
  }

  return (
    <pre>
      <code className={`hljs ${hljsCode} ${singleClass}`}>
        {codeString}
      </code>
    </pre>
  )
}

export default Snippet
