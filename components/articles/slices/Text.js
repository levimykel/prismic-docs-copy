import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/linkResolver'
import { anchorLinkSerializer } from 'utils/anchorLinkSerializer'
import { textStyles } from 'styles'

// Text slice component
const TextV2 = ({ slice, sliceIndex }) => (
  <div className="doc-define-text">
    <RichText render={slice.primary.content}
      linkResolver={linkResolver}
      htmlSerializer={anchorLinkSerializer(sliceIndex)}
    />
    <style jsx global>{textStyles}</style>
  </div>
)

export default TextV2
