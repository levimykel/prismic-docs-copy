import React, { useState } from 'react'
import useScrollPosition from 'utils/hooks/scrollPosition'

const BackToTop = ({ footerRef, tocRef }) => {
  const footerPadding = 55
  const tocBuffer = 200

  // Display button based on scroll location
  const [displayButton, setDisplayButton] = useState(true)
  const [buttonClass, setButtonClass] = useState('hidden')

  // Display and set the class depending on the scroll position
  useScrollPosition(
    ({ currPos }) => {
      // Calculate the sticky point
      const tocHeight = tocRef.current.offsetHeight
      const footerHight = footerRef.current.offsetHeight
      const docHeight = document.documentElement.scrollHeight
      const stickyPoint = docHeight - window.innerHeight - footerHight - footerPadding
      
      if (currPos.y <= tocHeight - tocBuffer) {
        setDisplayButton(false)
      } else {
        if (currPos.y >= stickyPoint) {
          setButtonClass('sticky')
        } else if (currPos.y < tocHeight && currPos.y > tocHeight - tocBuffer) {
          setButtonClass('hidden')
        } else {
          setButtonClass('')
        }
        setDisplayButton(true)
      }
    },
    [displayButton, buttonClass],
    null,
    true,
    150
  )

  if (displayButton) {
    return (
      <div
        id="link-to-top"
        className={`link-to-top headingSection ${buttonClass}`}
      >
        <a href="#top">Back to top <i className="icon-arrow-up" /></a>
      </div>
    )
  }
  return null
}

export default BackToTop
