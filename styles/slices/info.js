import css from 'styled-jsx/css'

export const infoStyles = css.global`
.new-doc-page section .info {
  margin-bottom: 1em;
  margin-top: 1em;
  padding: .8em 1em;
  background: rgba(232, 239, 246, .3);
  border-radius: 4px
}

.new-doc-page section .info h4 {
  margin: 0 !important;
  font-size: 15px !important;
  font-weight: 500 !important;
  color: #415064 !important
}

.new-doc-page section .info h4:first-of-type:before {
  content: "?";
  font-size: 14px;
  color: #fff;
  text-align: center;
  background-color: #99a6b7;
  border-radius: 50%;
  line-height: 20px;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: relative;
  top: 0;
  margin-right: 10px
}

.new-doc-page section .info h4:first-of-type {
  color: #81c1d6;
  margin-top: 0;
  margin-bottom: .5em !important;
  font-size: 16px;
  font-weight: 600
}

.new-doc-page section .info p {
  color: #6e7f97;
  font-size: 14px !important;
  margin-bottom: 0
}

.new-doc-page section .info pre {
  margin: 15px 0;
  font-size: 14px;
  color: #c43b3e;
}
`
