import css from 'styled-jsx/css'

export const mainNavStyles = css.global`
nav.menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  height: 80px;
  font-size: 15px;
  font-weight: 500;
  color: #2c2b59;
  border-bottom: 1px solid #eff0f7;
}

@media screen and (max-width:63.9375em) {
  nav.menu {
    top: 0;
  }
}

nav.menu .navbar {
  max-width: 1440px;
  height: 80px;
  padding: 0 20px;
}

@media screen and (min-width:40em) {
  nav.menu .navbar {
    padding: 0 40px;
  }
}

nav.menu .navbar > a,
nav.menu .navbar > ul {
  margin: 0;
  padding: 0;
}

nav.menu .brand img {
  height: 25px;
}

nav.menu .menu-desktop {
  list-style: none;
  margin: 0;
  flex-grow: 1;
  padding: 0 20px 0 0;
}

@media screen and (max-width: 1150px) {
  nav.menu .menu-desktop {
    display: none !important;
  }
}

nav.menu .menu-desktop li {
  margin-left: 3%;
}

nav.menu .menu-desktop li > a {
  transition-timing-function: ease;
  transition-duration: .15s;
  transition-property: color, border-color, background;
  font-weight: 500;
  color: #2c2b59;
}

nav.menu .menu-desktop li > a:hover {
  color: #5e5ab4;
}

nav.menu .menu-desktop li .button {
  display: inline-block;
  padding: 0 25px;
  line-height: 40px;
  background: #fff;
  border: 2px solid #ecf0f4;
  border-radius: 140px;
}

nav.menu .menu-desktop li .button:hover {
  background: #5168dc;
  border: 2px solid #5168dc;
  color: #fff !important;
}

@media screen and (min-width:40em) and (max-width:63.9375em) {
  nav.menu .menu-desktop li > a.button {
    padding: 0 20px;
  }
}

nav.menu .menu-mobile {
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media screen and (min-width:1151px) {
  nav.menu .menu-mobile {
    display: none;
  }
}

nav.menu .menu-mobile.is-open .menu-mobile-container {
  visibility: visible;
  -webkit-transform: translateY(0) scale(1);
  transform: translateY(0) scale(1);
  opacity: 1;
}

nav.menu .menu-mobile i.icon-menu {
  font-family: prismic-website;
  font-size: 30px;
  color: #2c2b59;
}

nav.menu .menu-mobile .menu-mobile-container {
  position: absolute;
  background: #fff;
  top: 17px;
  width: calc(100% - 18px);
  left: 9px;
  border-radius: 3px;
  padding: 40px 25px 20px;
  box-shadow: 0 20px 50px rgba(15, 46, 68, .3);
  visibility: hidden;
  transition: opacity .1s ease-in, -webkit-transform .1s ease-out;
  transition: transform .1s ease-out, opacity .1s ease-in;
  transition: transform .1s ease-out, opacity .1s ease-in, -webkit-transform .1s ease-out;
  opacity: 0;
  -webkit-transform: translateY(10px) scale(.95);
  transform: translateY(10px) scale(.95);
}

nav.menu .menu-mobile .menu-mobile-container .icon-close {
  position: absolute;
  right: 12px;
  top: 6px;
  font-size: 24px;
  color: #2c2b59;
}
`
