import css from 'styled-jsx/css'

export const homeHeaderStyles = css.global`
#docs div.header .header-container .docs-menu {
  box-shadow: 0 18px 35px 0 rgba(63, 63, 122, .1), 0 5px 15px 0 rgba(58, 50, 140, .07);
  border-radius: 4px;
}

#docs div.header .header-container .docs-menu .rest-api,
#docs div.header .header-container .docs-menu .sdks-frameworks {
  padding: 50px;
}

#docs div.header .header-container .docs-menu .rest-api {
  background: #fbfafe;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

#docs div.header .header-container .docs-menu .rest-api a {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

#docs div.header .header-container .docs-menu .rest-api a p {
  margin: 0;
}

#docs div.header .header-container .docs-menu .rest-api a .icon-rarr {
  margin-right: 15px;
}

#docs div.header .header-container .docs-menu .sdks-frameworks {
  background: #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .sdks {
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .sdks:after {
  content: "";
  height: 2px;
  background-color: #fbfafe;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .items {
  display: flex;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .items .techno {
  position: relative;
  width: 42px;
  height: 42px;
  margin: 0 10px 20px 0;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .items .techno a:hover~span {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

#docs div.header .header-container .docs-menu .sdks-frameworks .items .techno img {
  position: relative;
  z-index: 1;
}

#docs div.header .header-container .docs-menu .sdks-frameworks .items .techno span {
  position: absolute;
  left: calc(50% - 50px);
  -webkit-transform: scale(.8);
  transform: scale(.8);
  bottom: -50px;
  width: 100px;
  opacity: 0;
  transition: opacity .1s ease-out, -webkit-transform .1s ease-out;
  transition: opacity .1s ease-out, transform .1s ease-out;
  transition: opacity .1s ease-out, transform .1s ease-out, -webkit-transform .1s ease-out;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
}

#docs div.header .header-container .docs-menu h4 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
}

#docs div.header .header-container .docs-menu h5 {
  margin-bottom: 15px;
  color: #6e7da2;
  font-size: 14px;
  font-weight: 500;
}

#docs div.header .header-container .docs-menu p {
  font-size: 14px;
  margin-bottom: 20px;
}
`
