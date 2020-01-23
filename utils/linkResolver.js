/**
 * Generates urls for internal Prismic documents.
 * @param    {Object}  doc  Prismic link object or document object
 * @returns  {string}       Url corresponding to the Prismic document
 */
export const linkResolver = (doc) => {
  if (doc.type === 'article') return `/docs/${doc.uid}`
  return '/docs'
}

/**
 * Generates the Next.js href routes for internal Prismic documents.
 * @param    {Object}  doc  Prismic link object or document object
 * @returns  {string}       Next.js href route corresponding to the Prismic document
 */
export const hrefResolver = (doc) => {
  if (doc.type === 'article') return '/docs/[uid]'
  return '/docs'
}

/**
 * Manages links to the main Prismic site from the Footer.
 * @param    {Object}  doc  Prismic link object or document object
 * @returns  {string}       Url to the main prismic site
 */
export const footerLinkResolver = (doc) => {
  if (doc.type == 'freelancers') {
    return 'https://prismic.io/freelancers'
  }
  return 'https://prismic.io'
}
