import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'
import { ctaButtonStyles } from 'styles'

// CTA Button slice component
const CtaButton = ({ slice }) => (
  <Fragment>
    <DocLink link={slice.primary.link} linkClass="btn-with-analytics">
      {RichText.asText(slice.primary.button_label)}
    </DocLink>
    <style jsx global>{ctaButtonStyles}</style>
  </Fragment>
)

export default CtaButton
