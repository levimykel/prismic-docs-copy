import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyButton = ({ codeString }) => {
  // Define state variable & function for the copy button
  const [copyText, setCopyText] = useState('Copy')

  // Flash copied text confirmation
  const flashCopiedText = () => {
    setCopyText('Copied!')
    window.setTimeout(() => {
      setCopyText('Copy')
    }, 1000)
  }

  return (
    <CopyToClipboard
      text={codeString}
      onCopy={() => flashCopiedText()}
    >
      <span className="copy-source-code">{copyText}</span>
    </CopyToClipboard>
  )
}

export default CopyButton
