import React from 'react'
import { RichText } from 'prismic-reactjs'

import CategoryItem from './CategoryItem'
import { DocLink } from 'components'

const Category = ({ category }) => (
  <section className="category">
    <div className="category-head row">
      <div className="small-12 large-8 column">
        <h2>{RichText.asText(category.primary.title)}</h2>
        {RichText.render(category.primary.description)}
      </div>
      <div className="goto-all small-12 large-4 column align-bottom text-right">
        <DocLink link={category.primary.collection_link}>
          {RichText.asText(category.primary.collection_link_label)}
          <i className="icon-rarr" />
        </DocLink>
      </div>
    </div>
    <div className="category-body small-12">
      <div className="row">
        {category.items.map((item, index) => (
          <CategoryItem
            item={item}
            sliceLabel={category.slice_label}
            key={`category-item-${index}`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Category
