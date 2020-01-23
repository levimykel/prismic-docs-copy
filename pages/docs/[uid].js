import React, { useRef } from 'react'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import { parseCookies } from 'nookies'

import ArticleLayout from 'layouts/articleLayout'
import { Breadcrumbs, LanguageNav, SliceZone, TableOfContents } from 'components/articles'
import Error from 'pages/_error'

import { sessionName } from 'prismic-configuration'
import getMetaTitle from 'utils/getMetaTitle'
import { getArticleContent } from 'utils/prismicQueries'
import { langCookieName } from 'components/articles/slices/CodeSnippet/utils'
import { slideClose } from 'components/articles/sidebars/LanguageNav/slideToggle'

// Main Article componenet
const Article = ({ articleContent, loggedIn, activeLangCookie }) => {

  // Render the page if content was returned from Prismic
  if (articleContent.pageContent.article) {
    const { pageContent, layout, footer } = articleContent
    const { article, sideNavigation } = pageContent

    // Reference to the Footer for the Back to Top button
    const footerRef = useRef(null)

    // Reference to the Language Nav sidebar
    const sidebarNavRef = useRef(null)
  
    // Close the mobile navigation if open
    if (process.browser && sidebarNavRef.current) slideClose(sidebarNavRef, 500)
    
    return (
      <ArticleLayout
        pageType={article.type}
        layout={layout}
        footer={footer}
        loggedIn={loggedIn}
        footerRef={footerRef}
      >
        <Head>
          <title>{getMetaTitle(article.data.meta_title)}</title>
          <meta name="description" content={RichText.asText(article.data.meta_description)} />
        </Head>

        <LanguageNav
          sideNavigation={sideNavigation}
          pageId={article.id}
          sidebarNavRef={sidebarNavRef}
        />

        <section id="content" className="column small-12 medium-8 large-9" key={article.id}>
          <div className="row">
            <article className="column small-order-2 medium-order-2 large-order-1 small-12 medium-12 large-9">
              <Breadcrumbs article={article} />
              <RichText render={article.data.title} />
              <SliceZone
                sliceZone={article.data.body}
                docType={article.type}
                activeLangCookie={activeLangCookie}
              />

            </article>

            <TableOfContents
              sliceZone={article.data.body}
              footerRef={footerRef}
            />
          </div>
        </section>
      </ArticleLayout>
    )
  }

  // Call the standard error page if the document was not found
  return (
    <Error statusCode="404" />
  )
}

// Get initial data for the article
Article.getInitialProps = async function ({ req, res, query }) {
  const { uid } = query
  
  const cookies = parseCookies({ req })
  const loggedIn = cookies[sessionName]
  const activeLangCookie = cookies[langCookieName]

  const articleContent = await getArticleContent(uid, req, res)

  // Set 404 status code if the page doesn't exist
  if (res && !articleContent.pageContent.article) res.statusCode = 404;

  return {
    articleContent,
    loggedIn,
    activeLangCookie
  }
}

export default Article
