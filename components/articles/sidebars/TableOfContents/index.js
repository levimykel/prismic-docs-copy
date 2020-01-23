import React, { useRef } from 'react'

import TocLinks from './TocLinks'
import BackToTop from './BackToTop'
import { tableOfContentsStyles } from 'styles'

// Table of contents sidebar component
const TableOfContents = ({ sliceZone, footerRef }) => {
  // Reference to the Table of Contents for the Back to Top button
  const tocRef = useRef(null)

  return (
    <div className="column small-order-1 medium-order-1 large-order-2 sidebar align-top small-12 medium-12 large-3">
      <div
        id="table-of-contents"
        className="table-of-content"
        ref={tocRef}
      >
        <h3>Table of Contents</h3>
        <ul>
          <TocLinks sliceZone={sliceZone} />
        </ul>
        <BackToTop
          footerRef={footerRef}
          tocRef={tocRef}
        />
      </div>
      <style jsx global>{tableOfContentsStyles}</style>
    </div>
  )
}

export default TableOfContents
