import css from 'styled-jsx/css'

export const mainStyles = css.global`
@media screen and (max-width:640px) {

  .new-doc-page {
    padding: 0
  }

  .new-doc-page main {
    padding: 0
  }
}

.new-doc-page main.documentation {
  padding-top: 80px
}

.new-doc-page main.documentation > div:first-child {
  border-top: 1px solid #eff0f7;
  margin-bottom: 0
}

main.documentation .row {
  max-width: 100%
}

.new-doc-page main > div:not(#__next) {
  width: 100%;
  min-height: 500px;
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  box-shadow: inset 0 4px 10px -2px rgba(168, 177, 199, .3)
}

@media screen and (max-width:639px) {
  .new-doc-page main > div:not(#__next) {
    padding-left: 0;
    margin-bottom: 0;
    display: block
  }
}

@media screen and (min-width:64em) {
  .new-doc-page section {
    padding: 50px 40px
  }
}

.new-doc-page section hr {
  margin: 50px 0;
  border: none;
  border-top: 1px solid #eaeaea
}

.new-doc-page section article {
  padding: 2rem 0 0;
}

@media screen and (min-width:40em) {
  .new-doc-page section article {
    padding: 0 0 3em
  }
}

@media screen and (min-width:64em) {
  .new-doc-page section article {
    padding: 0 60px 3em 0
  }
}

.new-doc-page section article p {
  color: #434456;
  font-size: 15px
}

.new-doc-page main > div #content {
  min-height: 750px;
  position: relative;
  vertical-align: top
}

.new-doc-page main > div #content .wio-link {
  position: absolute;
  right: 30px
}

.new-doc-page #content {
  min-height: 650px
}

@media screen and (min-width:40em) {
  .new-doc-page #content {
    padding: 50px 40px
  }
}

@media screen and (min-width:64em) {
  .new-doc-page #content {
    padding: 50px 50px 50px 80px
  }
}

@media screen and (max-width:1024px) {
  .new-doc-page main > div #content {
    width: calc(100% - 315px)
  }
}

@media screen and (max-width:639px) {
  .new-doc-page main > div #content {
    width: 100%;
    box-sizing: border-box
  }
}
`
