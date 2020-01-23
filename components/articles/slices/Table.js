import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver } from 'utils/linkResolver'
import { htmlSerializer } from 'utils/htmlSerializer'
import { tableStyles } from 'styles'

// Table slice component
const TableV2 = ({ slice }) => (
  <div className="doc-table-options">
    <div className="doc-table-wrapper">
      {slice.items.map((row, index) => (
        <TableRow row={row} key={`table-row-${index}`}/>
      ))}
    </div>
    <style jsx global>{tableStyles}</style>
  </div>
)

const TableRow = ({ row }) => (
  <div className="doc-option">
    <div>
      <RichText render={row.column_1} 
        linkResolver={linkResolver}
        htmlSerializer={htmlSerializer()}
      />
    </div>
    <div>
      <RichText render={row.column_2} 
        linkResolver={linkResolver}
        htmlSerializer={htmlSerializer()}
      />
    </div>
  </div>
)

export default TableV2
