import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`

/**
 * Get the current scroll position for an element or the window.
 * @param    {Object}   element    Optional react ref to an element
 * @param    {boolean}  useWindow  Optional boolean to use the window rather than an element ref 
 * @returns  {Object}              Object indicating the target scroll position
 */
const getScrollPosition = ({ element, useWindow }) => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return (
    useWindow ?
    { x: window.scrollX, y: window.scrollY } :
    { x: position.left, y: position.top }
  )
}

/**
 * Custom hook to trigger events on scroll.
 * @param    {function}  effect     Function to be run when the hook triggers
 * @param    {array}     deps       Array of custom dependencies for the hook
 * @param    {Object}    element    Optional react ref to an element
 * @param    {boolean}   useWindow  Boolean to use the window rather than an element ref
 * @param    {number}    wait       Duration of the throttle timeout (in milliseconds)
 */
export const useScrollPosition = (effect, deps, element, useWindow, wait) => {
  // Store the current position coordinates
  const position = useRef(getScrollPosition({ useWindow }))

  // Throttle the timeout for better app performance
  let throttleTimeout = null

  // Callback to get the previous and current position
  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Remove the scroll event listener when the component is unmounted 
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

export default useScrollPosition
