import React from 'react'
import { RichText } from 'prismic-reactjs'
import { illustrationStyles } from 'styles'

// Image slice compontent
const Image = ({ slice }) => {
  const image = slice.primary.image
  const url = image ? image.url : ''
  const alt = image ? image.alt : ''
  return (
    <figure className="illustration">
      <img src={url} alt={alt} title={RichText.asText(slice.primary.image_title)} />
      <figcaption>{RichText.asText(slice.primary.caption)}</figcaption>
      <style jsx global>{illustrationStyles}</style>
    </figure>
  )
}

export default Image
