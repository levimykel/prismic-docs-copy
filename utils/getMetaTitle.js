import { RichText } from 'prismic-reactjs'

/**
 * Generate the page's Meta Title.
 * @param    {Object}  metaTitleField  Prismic Rich Text object
 * @returns  {string}                  Meta Title string with "Prismic" added
 */
const getMetaTitle = (metaTitleField) => {
  const text = RichText.asText(metaTitleField)
  return text != '' ? `${text} - Prismic` : 'Prismic'
}

export default getMetaTitle
