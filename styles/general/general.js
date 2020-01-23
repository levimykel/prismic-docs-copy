import css from 'styled-jsx/css'

export const generalStyles = css.global`
html {
  font-size: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
:after,
:before {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  background: #eff0f7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body > main {
  background: #fff;
  overflow-x: hidden;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  position: relative;
}

body * {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

img {
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic;
  display: inline-block;
  vertical-align: middle;
}

textarea {
  height: auto;
  min-height: 50px;
  border-radius: 0;
}

select {
  width: 100%;
  border-radius: 0;
}

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  padding: 0;
  border: 0;
  border-radius: 0;
  line-height: 1;
}

[data-whatinput=mouse] button {
  outline: 0;
}

.is-visible {
  display: block !important;
}

.is-hidden {
  display: none !important;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-decoration: inherit;
}

.icon-menu:before {
  content: '\E5D2';
}

.icon-close:before {
  content: '\E5CD';
}
`
