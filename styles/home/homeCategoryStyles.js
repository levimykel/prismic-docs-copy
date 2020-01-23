import css from 'styled-jsx/css'

export const homeCategoryStyles = css.global`
#docs article {
  padding-top: 100px;
}

#docs article .category {
  margin-bottom: 100px;
}

#docs article .category-head {
  margin-bottom: 40px;
}

#docs article .category-head .goto-all a {
  color: #f74a82;
  display: inline-block;
  vertical-align: middle;
  line-height: 55px;
}

#docs article .category-head .goto-all a .icon-rarr {
  margin-left: 15px;
  display: inline-block;
  vertical-align: middle;
}

#docs article .category-body .item-wrapper {
  padding: 10px;
}

#docs article .category-body .item-wrapper .item {
  border-radius: 4px;
}

#docs article .category-body .item-wrapper .item-illustration {
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

#docs article .category-body .item-wrapper .item-body {
  box-sizing: border-box;
  padding: 30px 20px;
  overflow: hidden;
}

#docs article .category-body .item-wrapper .item-body h4 {
  font-size: 16px;
  font-weight: 500;
}

#docs article .category-body .row-2 .item {
  box-shadow: 0 5px 15px 0 rgba(58, 50, 140, .07);
}

#docs article .category-body .row-2 .item:hover {
  transition: box-shadow .2s ease-out;
  box-shadow: 0 18px 35px 0 rgba(63, 63, 122, .1), 0 5px 15px 0 rgba(58, 50, 140, .07);
}

#docs article .category-body .row-2 .item-illustration {
  height: 180px;
}

#docs article .category-body .row-2 .item-body {
  height: 160px;
}

#docs article .category-body .row-3 .item-illustration {
  height: 300px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

#docs article .category-body .row-3 .item-body {
  height: 180px;
}
`
