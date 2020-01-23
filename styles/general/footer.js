import css from 'styled-jsx/css'

export const footerStyles = css.global`
footer {
  font-size: 15px;
  background: #fff
}

footer hr {
  height: 2px;
  margin: 0;
  border: none;
  background: #eeeff7;
}

footer .bottom-footer {
  padding: 65px 0
}

footer .bottom-footer .logo-footer-wrapper {
  display: flex;
  justify-content: flex-start;
  line-height: 34px;
  margin-top: 2rem;
  padding-right: 5px
}

@media screen and (min-width:40em) {
  footer .bottom-footer .logo-footer-wrapper {
    margin-top: 0
  }
}

footer .bottom-footer .logo-footer-wrapper img {
  height: 20px;
  margin-top: 8px;
  margin-right: 10px
}

footer .bottom-footer .logo-footer-wrapper span {
  margin-top: 11px;
  font-size: 12px;
  line-height: 1
}

footer .bottom-footer .title {
  font-weight: 500;
  line-height: 34px;
  color: #484a7a
}

footer .bottom-footer ul {
  list-style: none;
  margin: 0
}

footer .bottom-footer ul li {
  line-height: 30px
}

footer .bottom-footer ul li a {
  transition: color .1s
}

footer .bottom-footer ul li a:hover {
  color: #484a7a
}
`
