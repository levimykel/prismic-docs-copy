import React, { useState } from 'react'
import {
  CodeSnippet,
  CtaButton,
  HighlightedText,
  Image,
  Table,
  Text
} from './slices'

// SliceZone component
const SliceZone = ({ sliceZone, docType, dictionary, activeLangCookie }) => {
  // Set the initial active language from the active lang cookie
  const [activeLang, setActiveLang] = useState(activeLangCookie)

  // Initialize the slice index for the page anchor links 
  let sliceIndex = -1
  
  return sliceZone.map((slice, index) => {

    // Increase the slice index by the number of items in the slice
    sliceIndex+= slice.value ? slice.value.length : slice.items.length

    // Loop through the slice zone and render each slice by type
    switch (slice.slice_type) {
      case ('code_snippet'):
        return (
          <CodeSnippet
            slice={slice}
            docType={docType}
            dictionary={dictionary}
            activeLang={activeLang}
            setActiveLang={setActiveLang}
            key={`slice-${index}`}
          />
        )
      case ('cta_button'):
        return <CtaButton slice={slice} key={`slice-${index}`} />
      case ('highlighted_text'):
        return <HighlightedText slice={slice} key={`slice-${index}`} />
      case ('image'):
        return <Image slice={slice} key={`slice-${index}`} />
      case ('table'):
        return <Table slice={slice} key={`slice-${index}`} />
      case ('text'):
        return <Text slice={slice} sliceIndex={sliceIndex} key={`slice-${index}`} />
      default:
        // return <p style={{color:'tomato'}} key={`slice-${index}`}>{slice.slice_type}</p>
        return null
    }
  })
}

export default SliceZone
