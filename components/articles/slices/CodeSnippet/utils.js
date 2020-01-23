// Cookie name to keep track of the selected technology snippet
export const langCookieName = 'io.prismic.tech-lang'

// Class names for the active code snippets and tabs
export const activeSnippetClass = 'tabs-content--active'
export const activeTabClass = 'tabs-item--active'

// Code snippet language configuration
export const codeLang = {
  'page-javascript': 'javascript',
  'page-php': 'php',
  'page-nodejs': 'javascript',
  'page-reactjs': 'jsx',
  'page-vuejs': 'javascript',
  'page-laravel': 'php',
  'page-ruby': 'ruby',
  'page-java': 'java',
  'page-dotnet': 'javascript',
  'page-rest-api': 'bash',
}

/**
 * Adds the highlight.js styles to the code snippets.
 */
export const highlight = () => {
  document.querySelectorAll('pre code.hljs:not(.loaded)').forEach((block) => {
    if (hljs && hljs.highlightBlock) hljs.highlightBlock(block)
    if (hljs && hljs.lineNumbersBlock) hljs.lineNumbersBlock(block)
    block.classList.add("loaded")
  })
}

/**
 * Set the selected code language tab cookie.
 * @param  {string}  lang  New selected code language value
 */
export const setLangCookie = (lang) => {
  // Set a 4 hour expiration time
  let date = new Date()
  date.setTime(date.getTime() + (4 * 60 * 60 * 1000))

  // Set the cookie
  document.cookie = `${langCookieName}=${lang}; expires=${date.toString()}`
}

export default highlight
