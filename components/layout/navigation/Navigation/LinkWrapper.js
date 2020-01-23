import React from 'react'

// Link Wrapper component is different for mobile and desktop menus
const LinkWrapper = ({ children, isMobile }) => {
  if (isMobile) return  <div className="item small-12">{children}</div>
  return <li>{children}</li>
}

export default LinkWrapper
