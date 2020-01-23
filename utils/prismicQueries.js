import Prismic from 'prismic-javascript'
import {
  apiEndpoint,
  accessToken,
  footerApiEndpoint,
  footerAccessToken } from 'prismic-configuration'
import { linkResolver } from 'utils/linkResolver'

/**
 * Query all the content needed for an article page from Prismic.
 * @param    {string}  uid       UID of the article being queried
 * @param    {Object}  req       Request object from the server request
 * @param    {Object}  res       Response object from the server request
 * @returns  {Object}            All the queried Prismic content for the article
 */
export const getArticleContent = async (uid, req, res) => {
  const pageContentPromise = getArticle(uid, req, res)
  return getPrismicContent(pageContentPromise, req)
}

/**
 * Query all the content needed for the homepage from Prismic.
 * @param    {Object}  req  Request object from the server request
 * @returns  {Object}       All the queried Prismic content for the homepage
 */
export const getHomepageContent = async (req) => {
  const pageContentPromise = getSingleDocumentByType('homepage', req)
  return getPrismicContent(pageContentPromise, req)
}

/**
 * Query all the content needed for the homepage from Prismic.
 * @param    {Object}  pageContentPromise  Promise for the main Prismic document to be queried
 * @param    {Object}  req                 Request object from the server request
 * @returns  {Object}                      All the queried Prismic content for the homepage
 */
const getPrismicContent = async (pageContentPromise, req) => {
  const layoutPromise = getSingleDocumentByType('layout', req)
  const footerPromise = getFooter(req)

  const prismicDocs = await Promise.all([pageContentPromise, layoutPromise, footerPromise])

  let [pageContent, layout, footer] = prismicDocs
  footer = footer && footer.data ? footer.data.footer : null

  return {
    pageContent,
    layout,
    footer
  }
}

/**
 * Wrapper function to try/catch an async function.
 * @param   {function}  cb  Async callback function to execute
 * @return  {function}      The try catch block that executes the async function
 */
const asyncHandler = (cb) => {
  return async (...args) => {
    try {
      return await cb(...args)
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

/**
 * Get the article document from Prismic.
 * @param    {string}  uid   UID of the article being queried
 * @param    {Object}  req   Request object from the server request
 * @param    {Object}  res   Response object from the server request
 * @returns  {Object}        The queried article & sidebar documents
 */
const getArticle = asyncHandler(async (uid, req, res) => {
  // Query the article & side navigation
  const article = await Client(req).getByUID('article', uid)

  const sideNavigation = article.data.side_navigation.id
    ? await getDocumentByID(article.data.side_navigation.id)
    : null

  // If old url, redirect to current one 
  if (article && uid != article.uid) {
    const currentUrl = linkResolver(article)
    if (res) {
      res.writeHead(302, {
        Location: currentUrl
      })
      res.end()
    } else {
      Router.push(currentUrl)
    }
  }
  // Otherwise return the page & side navigation documents
  return { article, sideNavigation }
})

/**
 * Get a document from Prismic by the document's ID.
 * @param    {string}  id     Prismic document ID
 * @param    {Object}  req    Request object from the server request
 * @returns  {Object}         The document returned from Prismic
 */
export const getDocumentByID = asyncHandler(async (id, req) => {
  return await Client(req).getByID(id)
})

/**
 * Get multiple documents by Custom Type from Prismic.
 * @param   {array}   types  Array of Custom Type API IDs to be queried
 * @param   {Object}  req    Request object from the server request
 * @return  {Object}         The response object returned from Prismic
 */
const getDocumentsByType = asyncHandler(async (types, req) => {
  return await Client(req).query(
    Prismic.Predicates.any('document.type', types)
  )
})

/**
 * Get a single type document from Prismic by the type's API ID.
 * @param    {string}  type   Prismic singleton API ID
 * @param    {Object}  req    Request object from the server request
 * @returns  {Object}         The single type document returned from Prismic
 */
const getSingleDocumentByType = asyncHandler(async (type, req) => {
  return await Client(req).getSingle(type)
})

/**
 * Get the layout document from the main website Prismic repository.
 * @param    {Object}  req  Request object from the server request
 * @returns  {Object}       The layout document returned from Prismic
 */
const getFooter = asyncHandler(async (req) => {
  return await FooterClient(req).getSingle('layout', { 'fetch': 'layout.footer' })
})

/**
 * Create the Client options object.
 * @param    {Object}  req          Request object from the server request
 * @param    {String}  accessToken  Access token for the Prismic repository
 * @returns  {Object}               The Client options object
 */
const createClientOptions = (req = null, accessToken = null) => {
  return Object.assign(
    {},
    req ? { req } : {},
    accessToken ? { accessToken: accessToken } : {}
  )
}

/**
 * Connects to the Prismic documentation repository.
 * @param    {Object}  req  Request object from the server request
 * @returns  {Object}       The Client object used to make queries to Prismic
 */
export const Client = (req = null) => {
  return Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
}

/**
 * Connects to the main Prismic website repository (for the footer content).
 * @param    {Object}  req  Request object from the server request
 * @returns  {Object}       The Client object used to make queries to Prismic
 */
export const FooterClient = (req = null) => {
  return Prismic.client(footerApiEndpoint, createClientOptions(req, footerAccessToken))
}
