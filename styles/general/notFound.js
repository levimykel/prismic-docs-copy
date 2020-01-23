import css from 'styled-jsx/css'

export const notFoundStyles = css.global`
#error,
#notFound {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: -apple-system, BlinkMacSystemFont, Hind Vadodara, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  background: #f5f6f9;
  padding: 20px;
}

@media screen and (min-width:40em) {
  #error,
  #notFound {
    padding: 0;
  }
}

#error main,
#notFound main {
  background: #f5f6f9;
}

#error .msg,
#notFound .msg {
  text-align: center;
  margin: 20px auto;
}

@media screen and (min-width:40em) {

  #error .msg,
  #notFound .msg {
    margin: 250px auto 150px;
  }
}

#error .msg h2,
#notFound .msg h2 {
  font-size: 30px;
  color: #1d2230;
  letter-spacing: 0;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 10px;
}

#error .msg p,
#notFound .msg p {
  color: #667587;
}

#error .msg p a,
#notFound .msg p a {
  color: #0082db;
  text-decoration: none;
}

#error .msg p a:hover,
#notFound .msg p a:hover {
  text-decoration: underline;
}

#error .msg img,
#notFound .msg img {
  width: 140px;
  margin-bottom: 40px;
}

#error .msg .button,
#notFound .msg .button {
  height: 36px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  outline: 0;
}

#error .msg .button.default,
#notFound .msg .button.default {
  font-weight: 400;
  background: #f9f9fb;
  border: 1px solid #c9d0d8;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, .05);
  border-radius: 3px;
  transition: all .2s cubic-bezier(.6, 0, .3);
}

#error .msg .button.default:hover,
#notFound .msg .button.default:hover {
  background-image: linear-gradient(#f9f9f9, #f0f3f5);
  border: 1px solid #c9d0d8;
}

#error .msg .button.default:active,
#notFound .msg .button.default:active {
  background: #f5f6f9;
  border: 1px solid #c9d0d8;
  box-shadow: inset 0 1px 1px 0 #c9d0d8, inset 0 1px 4px 0 rgba(99, 115, 129, .2);
}

#error .msg .button.default[disabled],
#notFound .msg .button.default[disabled] {
  color: #c9d0d8;
  background: #f9f9fb;
  border: 1px solid #c9d0d8;
  box-shadow: 0 1px 0 0 rgba(22, 29, 37, .05);
  cursor: not-allowed;
}
`
