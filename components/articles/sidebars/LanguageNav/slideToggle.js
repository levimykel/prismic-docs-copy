/**
 * Slide the target dom element up and hide it.
 * @param  {Object}  target    React ref of the target element
 * @param  {number}  duration  Duration of the slide effect (in milliseconds)
 */
const slideUp = (target, duration) => {
  target.current.style.transitionProperty = 'height, margin, padding'
  target.current.style.transitionDuration = `${duration}ms`
  target.current.style.height = `${target.current.offsetHeight}px`
  window.setTimeout( () => {
    target.current.style.height = 0
    target.current.style.overflow = 'hidden'
  }, 1)
  window.setTimeout( () => {
    target.current.style.display = 'none'
    target.current.style.removeProperty('height')
    target.current.style.removeProperty('overflow')
    target.current.style.removeProperty('transition-duration')
    target.current.style.removeProperty('transition-property')
  }, duration+1)
}

/**
 * Display and slide the target dom element down into view.
 * @param  {Object}  target    React ref of the target element
 * @param  {number}  duration  Duration of the slide effect (in milliseconds)
 */
const slideDown = (target, duration) => {
  target.current.style.display = 'block'
  let height = target.current.offsetHeight
  target.current.style.height = 0
  target.current.style.overflow = 'hidden'
  target.current.style.transitionProperty = 'height, margin, padding'
  target.current.style.transitionDuration = `${duration}ms`
  window.setTimeout( () => {
    target.current.style.height = `${height}px`
  }, 1)
  window.setTimeout( () => {
    target.current.style.removeProperty('height')
    target.current.style.removeProperty('overflow')
    target.current.style.removeProperty('transition-duration')
    target.current.style.removeProperty('transition-property')
  }, duration+1)
}

/**
 * Slide the target dom element close if it's currently open.
 * @param  {Object}  target          React ref of the target element
 * @param  {number}  [duration=500]  Duration of the slide effect (in milliseconds)
 */
export const slideClose = (target, duration = 500) => {
  if (target) {
    if (window.innerWidth < 640 && target.current.style.display === 'block') {
      slideUp(target, duration);
    }
  }
}

/**
 * Toggle to slide up and down the target dom element.
 * @param  {Object}  target          React ref of the target element
 * @param  {number}  [duration=500]  Duration of the slide effect (in milliseconds)
 */
export const slideToggle = (target, duration = 500) => {
  const targetDisplay = target.current.style.display
  if (targetDisplay === 'none' || targetDisplay === '') {
    slideDown(target, duration);
  } else {
    slideUp(target, duration);
  }
}

export default slideToggle
