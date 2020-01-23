import css from 'styled-jsx/css'

export const techNavStyles = css.global`
.menu-technologies {
  border-bottom: 1px solid #eff0f7;
  margin-left: 0;
  padding: 12px 20px;
  margin-bottom: 0;
}

.menu-technologies li {
  display: inline-block;
  list-style-type: none;
  padding: 0 12px;
}

@media screen and (max-width:63.9375em) {
  .menu-technologies li {
    padding: 0 14px;
  }
}

@media screen and (max-width: 700px) {
  .menu-technologies li {
    padding: 0 10px;
  }
}

.menu-technologies li a .img {
  width: 27px;
  height: 27px;
  opacity: .6;
  background-size: contain;
  background-repeat: no-repeat;
  transition: opacity .1s ease-in-out;
}

.menu-technologies li a:hover .img {
  opacity: 1;
}

.menu-technologies li .name,
.menu-technologies li .img {
  display: inline-block;
  vertical-align: middle;
}

.menu-technologies li .name {
  font-size: 13px;
  margin-left: 6px;
  display: none;
}

@media screen and (min-width:68em) {
  .menu-technologies li .name {
    display: inline-block;
  }
}

.menu-technologies li:not(:first-child) {
  border-left: 1px solid #eff0f7;
}

@media screen and (max-width: 700px) {
  .menu-technologies li:not(:first-child) {
    border: none;
  }
}

.menu-technologies li.active .img {
  opacity: 1;
}

.menu-technologies li.intercom-action {
  display: none;
  border: 0;
  font-size: 13px;
  line-height: 30px;
  float: right;
  cursor: pointer;
  color: #2e2f42;
}

@media screen and (min-width:83em) {
  .menu-technologies li.intercom-action {
    display: inline-block;
  }
}
`
