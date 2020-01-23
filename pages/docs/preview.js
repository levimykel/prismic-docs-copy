import React from 'react'
import Router from 'next/router'

import { Client } from 'utils/prismicQueries'
import { linkResolver } from 'utils/linkResolver'

// Preview endpoint component for Prismic previews
const Preview = () => (
  <div>Preview</div>
)

// Get the preview url and redirect to that page
Preview.getInitialProps = async function (context) {
  
  // Get the preview token from the url
  const token = context.query.token
  const { res, req } = context

  // Retrieve the page url
  const url = await Client(req).previewSession(token, linkResolver, '/')
  
  // Redirect to that page
  if (res) {
    res.writeHead(302, { Location: url })
    res.end()
  } else {
    Router.push(url)
  }
  return {}
}

export default Preview
