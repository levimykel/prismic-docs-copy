import css from 'styled-jsx/css'

export const homeStyles = css.global`
#docs  h1,
#docs  h2 {
  letter-spacing: 1px
}

#docs .icon-rarr {
  width: 24px;
  height: 24px;
  margin: 0;
  line-height: 24px;
  font-size: 15px;
  text-align: center;
  border-radius: 50%;
  color: #f74a82;
  background-color: rgba(246, 74, 130, .2);
}

#docs .icon-rarr:before {
  content:'\e5cc'
}

@media screen and (min-width: 64em) {
  .new-doc-page #docs section {
    padding: 0;
  }
}

#docs nav.menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  z-index: 1000;
  height: 80px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: none;
}

@media screen and (max-width: 63.9375em) {
  #docs nav.menu {
      top: 0;
  }
}

#docs .navbar,
#new-documentation .navbar {
  max-width: 1440px;
  padding: 0 20px;
}

@media screen and (min-width:40em) {
  #docs .navbar,
  #new-documentation .navbar {
    padding: 0 40px;
  }
}

#docs .navbar li.item-docs,
#new-documentation .navbar li.item-docs {
  display: none;
}

#docs .navbar>a,
#docs .navbar>ul,
#new-documentation .navbar>a,
#new-documentation .navbar>ul,
html body {
  margin: 0;
  padding: 0;
}

#docs div.header {
  min-height: 500px;
  background-image: linear-gradient(-180deg, rgba(250, 250, 252, .42), #f8f8fa);
  width: 100%;
  position: relative;
}

@media screen and (max-width:39.9375em) {
  #docs div.header {
    padding-top: 150px;
    height: auto;
    margin-bottom: 100px;
  }
}

@media screen and (min-width:40em) and (max-width:63.9375em) {
  #docs div.header {
    height: 700px;
    margin-bottom: 330px;
    max-height: 800px;
  }
}

@media screen and (min-width:64em) {
  #docs div.header {
    height: 768px;
    margin-bottom: 160px;
    max-height: 800px;
  }
}

@media screen and (min-width:75em) {
  #docs div.header {
    height: 720px;
  }
}

@media screen and (min-width:64em) {
  #docs div.header .header-container {
    top: 200px;
  }
}

@media screen and (min-width:40em) {
  #docs div.header .header-container {
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -110px;
    top: 200px;
  }
}

#docs div.header .header-container .presentation {
  margin-bottom: 130px;
}

#docs div.header h1 {
  margin-bottom: 15px;
  line-height: 1.2;
}

#docs hr {
  margin: 1.25rem auto;
}
`
