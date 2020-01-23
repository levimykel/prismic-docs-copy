import css from 'styled-jsx/css'

export const homeCtaStyles = css.global`
#docs .top-footer {
  padding: 60px 0 40px;
  font-size: 15px;
}

@media screen and (min-width:40em) {
  #docs .top-footer {
    padding: 82px 0 60px
  }
}

#docs .top-footer .title h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2rem
}

@media screen and (min-width:40em) {
  #docs .top-footer .title h2 {
    margin-bottom: 3rem
  }
}

@media screen and (min-width:64em) {
  #docs .top-footer .title h2 {
    text-align: left;
    margin-bottom: 0
  }
}

#docs .top-footer .actions {
  text-align: center
}

@media screen and (min-width:64em) {
  #docs .top-footer .actions {
    text-align: left
  }
}

#docs .top-footer .actions a {
  transition-timing-function: ease;
  transition-duration: .15s;
  transition-property: color, border-color, background;
  font-weight: 600;
  border-width: 2px;
  border-style: solid;
  padding: 16px 50px;
  border-radius: 100px;
  display: block;
  max-width: 300px;
  margin: 1rem auto
}

#docs .top-footer .actions a:first-child {
  border-color: #1de9b6;
  color: #484a7a
}

#docs .top-footer .actions a:first-child:hover {
  color: #15d8a7;
  border-color: #15d8a7
}

#docs .top-footer .actions a:last-child {
  border-color: #1de9b6;
  background: #1de9b6;
  color: #fff
}

#docs .top-footer .actions a:last-child:hover {
  background: #15d8a7;
  border-color: #15d8a7
}

@media screen and (min-width:40em) {
  #docs .top-footer .actions a {
    padding: 10px 50px;
    margin: 0 0 0 20px;
    display: inline;
    display: initial
  }
}
`
