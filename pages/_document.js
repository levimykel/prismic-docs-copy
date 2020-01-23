import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { repoName } from 'prismic-configuration'

/* Script to fix the toolbar crashing the site in IE
 * Marc helped me find this fix. I'm sure there's a better
 * way to handle this, but I wasn't able to find it. 
 */
const ieToolbarFix = {
  __html: `
Object.prototype.repeat = function() {
  console.log(arguments);
  return arguments;
};
`}

// Default document component
export default class CustomDocument extends Document {
  render () {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width" />
          <meta name="theme-color" content="#1a2d4a" />
          <link rel="icon" href="/doc-assets/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara:300,400,500,600,700|Source+Code+Pro:400,500,600|Material+Icons&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://prismicio-docs.prismic.io" />
          <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
        </Head>
        <body id="new-documentation" className="new-doc-page">
          <main>
            <Main />
            <NextScript />
          </main>
        
          {/* Website scripts */}
          <script dangerouslySetInnerHTML={ieToolbarFix} noModule="nomodule" />
        </body>
      </html>
    )
  }
}
