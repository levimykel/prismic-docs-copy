import React from 'react'
import { RichText } from 'prismic-reactjs'
import { DocLink } from 'components'

const CategoryItem = ({ item, sliceLabel }) => {
  const itemClass = sliceLabel === 'row-3' ? 'row-3 small-12 medium-6 large-4' : 'row-2 small-12 medium-6'
  return (
    <DocLink link={item.page_link} linkClass={itemClass}>
      <div className="item-wrapper column">
        <div className="item">
          <div
            className="item-illustration"
            style={{backgroundImage: `url(${item.image.url})`, backgroundColor: item['background-color']}}
          />
          <div className="item-body">
            <h4>{RichText.asText(item.page_title)}</h4>
            {RichText.render(item.page_description)}
          </div>
        </div>
      </div>
    </DocLink>
  )
}

export default CategoryItem
