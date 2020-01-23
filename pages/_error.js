import React, { Fragment } from 'react'
import Head from 'next/head'
import { generalStyles, grid, notFoundStyles, reset, typography } from 'styles'

const Error = (props) => (
  <Fragment>
    <Head>
      <title>Page Not Found - Prismic</title>
      <meta name="description" content="Prismic is a web software you can use to build and manage any kind of website or app. API-driven, it is the easiest way to integrate your content with no technology or design constraint. It is also the easiest way for content writers to edit, preview and plan updates." />
    </Head>
    <div id="notFound">
      <main className="row align-center">
        <div className="msg small-12 medium-8">
          <img src="/doc-assets/images/not-found.png"/>
          <h2>This is not the page you are looking for</h2>
          <p>
            Sorry, the page you were looking for could not be located on this site.
            If you think there is really something missing on this website, please ask us at <a href="mailto:contact@prismic.io">contact@prismic.io</a>.
          </p>
          <a className="button default" href="/">Go back to homepage</a>
        </div>
      </main>
    </div>
    <style jsx global>{reset}</style>
    <style jsx global>{generalStyles}</style>
    <style jsx global>{grid}</style>
    <style jsx global>{typography}</style>
    <style jsx global>{notFoundStyles}</style>
  </Fragment>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null
  return { statusCode }
}

export default Error
