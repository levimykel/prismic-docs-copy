import React, { useEffect, useState } from 'react'
import { getDocumentByID } from 'utils/prismicQueries'
import { default as NextLink } from 'next/link'
import { linkResolver, hrefResolver } from 'utils/linkResolver'
import { RichText } from 'prismic-reactjs'

// Article breadcrumbs component
const Breadcrumbs = ({ article }) => {
  const [breadcrumbs, setBreadcrumbs] = useState(null)
  let breadcrumbCount = 0

  const getBreadcrumbs = async (article) => {
    const pageBreadcrumb = (
      <NextLink
        as={linkResolver(article)}
        href={hrefResolver(article)}
        passHref
      >
        <a>{RichText.asText(article.data.breadcrumb_label)}</a>
      </NextLink>
    )

    if (!article.data.parent_page.id) {
      return pageBreadcrumb
    }
    if (breadcrumbCount++ > 9) return pageBreadcrumb

    const parentPage = await getDocumentByID(article.data.parent_page.id)
    const parentBreadcrumbs = await getBreadcrumbs(parentPage)
    return [parentBreadcrumbs, ' > ', pageBreadcrumb ]
  }

  useEffect(() => {
    const loadBreadcrumbs = async (article) => {
      const loadedBreadcrumbs = await getBreadcrumbs(article)
      let breadcrumb = (
        <p>
          <NextLink
            as={'/docs'}
            href={'/docs'}
            passHref
          >
            <a>Docs</a>
          </NextLink>
          {' > '}
          {loadedBreadcrumbs}
        </p>
      )
      setBreadcrumbs(breadcrumb)
    }
    loadBreadcrumbs(article)
  }, [])
  
  if (breadcrumbs) return breadcrumbs
  return <p>Loading...</p>
}

export default Breadcrumbs
