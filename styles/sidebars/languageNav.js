import css from 'styled-jsx/css'

export const languageNavStyles = css.global`
.new-doc-page main > div .navbar-mobile-toggle {
  display: none;
}

.new-doc-page main > div .navbar-wrapper {
  background: rgba(239, 240, 247, .3);
  box-shadow: inset -4px 0 2px -2px rgba(168, 177, 199, .2);
  padding: 50px 30px 30px 40px;
  position: relative;
  box-sizing: border-box;
  vertical-align: top;
}

@media screen and (max-width:39.9375em) {
  .new-doc-page main > div .navbar-wrapper {
    background: #fff;
  }
}

@media screen and (min-width:64em) {
  .new-doc-page main > div .navbar-wrapper {
    padding: 50px 30px 30px 40px;
  }
}

.new-doc-page main > div .navbar-wrapper.fixed nav {
  position: fixed;
  top: 0;
  overflow-y: auto;
  height: calc(100vh - 100px);
}

.new-doc-page main > div .navbar-wrapper .navbar-mobile-toggle {
  display: none;
}

.new-doc-page main > div .navbar-wrapper nav > ul {
  list-style: none;
  margin: 0;
}

.new-doc-page main > div .navbar-wrapper nav > ul li {
  color: rgba(46, 47, 66, .8);
  padding: 8px 0;
  font-weight: 500;
}

.new-doc-page main > div .navbar-wrapper nav > ul li.active > a,
.new-doc-page main > div .navbar-wrapper nav > ul li.active > span {
  color: #4d92ce;
}

.new-doc-page main > div .navbar-wrapper nav > ul li a,
.new-doc-page main > div .navbar-wrapper nav > ul li span {
  font-size: 14px;
  text-decoration: none;
}

.new-doc-page main > div .navbar-wrapper nav > ul li a.current,
.new-doc-page main > div .navbar-wrapper nav > ul li span.current {
  color: #4e92df;
}

.new-doc-page main > div .navbar-wrapper nav > ul li ul.fields {
  padding: 10px 0 0;
  margin-left: 12px;
}

.new-doc-page main > div .navbar-wrapper nav > ul li ul.fields li {
  border: 0;
  list-style-type: none;
  padding: 2px 0;
}

.new-doc-page main > div .navbar-wrapper nav > ul li ul.fields li a {
  font-weight: 400;
  font-size: 14px;
  text-transform: none;
  color: rgba(46, 47, 66, .8);
}

.new-doc-page main > div .navbar-wrapper nav > ul li ul.fields li a:hover {
  color: #2e2f42;
  font-weight: 500;
}

.new-doc-page main > div .navbar-wrapper nav > ul li ul.fields li.active a {
  font-weight: 500;
  color: #4d92ce;
}

.new-doc-page main > div .navbar-wrapper nav ul.squared {
  margin-left: 20px;
}

@media screen and (max-width:1024px) {
  .new-doc-page main > div .navbar-wrapper {
    width: 210px;
  }
}

@media screen and (max-width:639px) {
  .new-doc-page main > div .navbar-wrapper {
    width: 100%;
    box-sizing: border-box;
    position: static;
    padding: 30px 20px 10px;
  }

  .new-doc-page main > div .navbar-wrapper .navbar-mobile-toggle {
    display: block;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    padding: 15px 0;
    border-bottom: 2px solid #eff0f7;
    position: relative;
    cursor: pointer;
  }

  .new-doc-page main > div .navbar-wrapper .navbar-mobile-toggle:after {
    font-family: 'Material Icons';
    content: "\E5D2";
    position: absolute;
    right: 0;
    top: .3rem;
    font-size: 22px;
    font-weight: normal;
    pointer-events: none;
  }

  .new-doc-page main > div .navbar-wrapper .navbar-mobile-toggle+nav {
    display: none;
  }

  .new-doc-page main > div .navbar-wrapper .navbar-mobile-toggle+nav.is-open {
    display: block;
  }
}
`
