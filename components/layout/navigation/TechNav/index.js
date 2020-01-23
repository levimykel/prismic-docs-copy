import React, { Fragment } from 'react'
import { RichText } from 'prismic-reactjs'

import TechNavLinks from './TechNavLinks'
import { techNavStyles } from 'styles'

// Tech languages navigation component
const TechNav = ({ layout, pageType }) => {
  const techNav = layout.data.language
  
  // Open Intercom windown with pre-filled message
  const openIntercomMessage = () => {
    if (window && window.Intercom) window.Intercom('showNewMessage', RichText.asText(layout.data['typo-error-message']))
  }

  return (
    <Fragment>
      <ul className="menu-technologies">
        <TechNavLinks techNav={techNav} pageType={pageType} />
        <li className="intercom-action" onClick={openIntercomMessage}>
          {RichText.asText(layout.data['typo-error'])}
        </li>
      </ul>
      <style jsx global>{techNavStyles}</style>
    </Fragment>
  )
}

export default TechNav
