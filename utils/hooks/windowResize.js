import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

/**
 * Custom hook to trigger events on window resize.
 * @param    {function}  effect     Function to be run when the hook triggers
 * @param    {array}     deps       Array of custom dependencies for the hook
 * @param    {number}    wait       Duration of the throttle timeout (in milliseconds)
 */
export const windowResize = (effect, deps, wait) => {
  // Throttle the timeout for better app performance
  let throttleTimeout = null

  // Callback to get the current position widow width
  const callBack = () => {
    effect({ width: window.innerWidth })
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    // Add the resize event listener
    window.addEventListener('resize', handleResize)

    // Remove the resize event listener when the component is unmounted 
    return () => window.removeEventListener('resize', handleResize)
  }, deps)
}

export default windowResize
