import React from 'react'
import { homeCategoryStyles } from 'styles'
import Category from './Category'

// Homepage categories component
const Categories = ({ categories }) => (
  <article>
    {categories.map((category, index) => (
      <Category
        category={category}
        key={`category-${index}`}
      />
    ))} 
    <style jsx global>{homeCategoryStyles}</style>
  </article>
)

export default Categories
