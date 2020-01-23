import React from 'react'

// CTA link will be different depending on if the user is logged in or not 
const CtaLink = ({ loggedIn }) => {
  const url = loggedIn ? 'https://prismic.io/dashboard/' : 'https://prismic.io/signup'
  const linkClass = loggedIn ? 'dashboard' : ''
  const text = loggedIn ? 'Dashboard' : 'Test it out'
  return (
    <a href={url} className={`button ${linkClass}`}>{text}</a>
  )
}

export default CtaLink
