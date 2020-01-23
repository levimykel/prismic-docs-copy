import React from 'react'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import { parseCookies } from 'nookies'

import DefaultLayout from 'layouts'
import { Categories, Cta, HomeHeader } from 'components/homepage'
import Error from 'pages/_error'

import { getHomepageContent } from 'utils/prismicQueries'
import getMetaTitle from 'utils/getMetaTitle'
import { sessionName } from 'prismic-configuration'
import { homeStyles } from 'styles'

// Main Homepage component
const Homepage = ({ homepageContent, loggedIn }) => {
  if (homepageContent.pageContent) {
    const { pageContent, layout, footer } = homepageContent

    return (
      <DefaultLayout
        pageType={pageContent.type}
        mainNav={layout.data.main_navigation}
        footer={footer}
        loggedIn={loggedIn}
        pageId={'docs'}
      >
        <Head>
          <title>{getMetaTitle(pageContent.data.meta_title)}</title>
          <meta name="description" content={RichText.asText(pageContent.data.meta_description)} />
        </Head>
        <main>
          <div className="header">
            <div className="header-container">
              <div className="presentation text-center">
                <h1>Prismic documentation</h1>
              </div>
              <HomeHeader pageContent={pageContent} />
            </div>
          </div>
          <Categories categories={pageContent.data.categories} />
          <Cta />
        </main>
        <style jsx global>{homeStyles}</style>
      </DefaultLayout>
    )
  }

  // Call the standard error page if the document was not found
  return (
    <Error statusCode="404" />
  )
}

// Get the hompage content
Homepage.getInitialProps = async ({ req, res }) => {
  const cookies = parseCookies({ req })
  const loggedIn = cookies[sessionName]

  const homepageContent = await getHomepageContent(req)

  // Set 404 status code if the page doesn't exist
  if (res && !homepageContent.doc) res.statusCode = 404;

  return {
    homepageContent,
    loggedIn
  }
}

export default Homepage
