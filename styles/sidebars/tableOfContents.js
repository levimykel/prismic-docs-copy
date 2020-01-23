import css from 'styled-jsx/css'

export const tableOfContentsStyles = css.global`
.new-doc-page main > div #content .sidebar {
  border-left: none;
  border-radius: 0 !important;
  padding: 0 2rem 2rem;
  background: #f8f8fc;
  margin-top: 1rem;
  display: none
}

.new-doc-page main > div #content .sidebar.fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  overflow: scroll;
  background: #fff
}

@media screen and (min-width:64em) {
  .new-doc-page main > div #content .sidebar {
    display: block;
    margin-top: 0;
    padding: 1rem 0 1rem 30px
  }
}

.new-doc-page main > div #content .sidebar h3 {
  margin-top: 0;
  font-weight: 500;
  font-size: 14px
}


.new-doc-page main > div #content .sidebar .select-container {
  align-items: center
}

.new-doc-page main > div #content .sidebar .select-container .select-wrapper {
  width: auto;
  height: auto;
  position: relative
}

@media screen and (min-width:64em) {
  .new-doc-page main > div #content .sidebar .select-container .select-wrapper {
    margin-bottom: 3rem
  }
}

.new-doc-page main > div #content .sidebar .select-container .select-wrapper:after {
  font-family: prismic-website;
  content: "\E002";
  position: absolute;
  right: 10px;
  top: 4px;
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  pointer-events: none
}

.new-doc-page main > div #content .sidebar .select-container select {
  padding: .6rem 2rem .6rem 1rem;
  background-color: #f74a82;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  border-radius: 6px
}

.new-doc-page main > div #content .sidebar .select-container select:focus {
  outline: none
}

.new-doc-page main > div #content .sidebar .select-container select:hover {
  cursor: pointer
}

@media screen and (min-width:64em) {
  .new-doc-page main > div #content .sidebar {
    border-left: 1px solid #eff0f7;
    border-radius: 4px;
    padding-top: 0;
    padding-left: 30px;
    background: none
  }
}

.new-doc-page .table-of-content .headingSection a {
  font-weight: 500;
  font-size: 14px
}

.new-doc-page .table-of-content .headingParagraph a {
  color: #6e7da2
}

.new-doc-page main>div #content .sidebar div.table-of-content {
  padding-top: 0;
  display: none
}

.new-doc-page main>div #content .sidebar div.table-of-content ul {
  padding: 0;
  margin: 0;
  font-size: 13px;
  line-height: 1.8rem;
  list-style-type: none
}

.new-doc-page main>div #content .sidebar div.table-of-content ul li {
  list-style-type: none;
  line-height: 20px;
  margin-bottom: 8px
}

@media screen and (min-width:64em) {
  .new-doc-page main>div #content .sidebar div.table-of-content {
    display: block
  }
}

.new-doc-page main > div #content .sidebar .link-to-top {
  display: block;
  position: fixed;
  bottom: 50px;
  opacity: 1;
  -webkit-transition: opacity 0.5s ease;
  -moz-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  -o-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

.new-doc-page main > div #content .sidebar .link-to-top.sticky {
  position: absolute;
  bottom: 110px;
}

.new-doc-page main > div #content .sidebar .link-to-top.hidden {
  opacity: 0;
} 

.new-doc-page main > div #content .sidebar .link-to-top.removed {
  display: none;
}

.new-doc-page main > div #content .sidebar .link-to-top .icon-arrow-up {
  position: relative;
  top: 4px;
  font-size: 16px;
}

.new-doc-page main > div #content .sidebar .link-to-top .icon-arrow-up:before {
  content:'\e5d8'
}
`
