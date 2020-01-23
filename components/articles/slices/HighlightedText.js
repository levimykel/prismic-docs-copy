import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/linkResolver'
import { htmlSerializer } from 'utils/htmlSerializer'
import { infoStyles } from 'styles'

// Highlighted text slice component
const HighlightedText = ({ slice }) => (
  <div className="info">
    <RichText render={slice.primary.content}
      linkResolver={linkResolver}
      htmlSerializer={htmlSerializer}
    />
    <style jsx global>{infoStyles}</style>
  </div>
)

export default HighlightedText
