import css from 'styled-jsx/css'

export const tableStyles = css.global`
.new-doc-page section article .doc-table-options {
  margin: 1rem 0 2rem;
  overflow-y: scroll;
}

.new-doc-page section article .doc-table-options .doc-table-wrapper {
  display: table;
  width: 100%;
  border-top: 1px solid #eff0f7
}

.new-doc-page section article .doc-table-options pre {
  margin: 0
}

.new-doc-page section article .doc-table-options strong,
.new-doc-page section article .doc-table-options pre {
  color: #4d92ce;
  padding: .2rem;
  line-height: 24px
}

.new-doc-page section article .doc-table-options .field-name {
  font-weight: 500
}

.new-doc-page section article .doc-table-options .field-name~span {
  color: #4b846d;
  font-size: .8em
}

.new-doc-page section article .doc-table-options .doc-option {
  font-size: 0;
  vertical-align: middle;
  box-sizing: border-box;
  display: table-row
}

.new-doc-page section article .doc-table-options .doc-option > div {
  font-size: 1rem;
  vertical-align: middle;
  display: table-cell;
  padding: 10px 0;
  border-bottom: 1px solid #eff0f7;
  vertical-align: top
}

.new-doc-page section article .doc-table-options .doc-option > div:first-child {
  background: #fafafd;
  width: 30%;
  border-left: 1px solid #eff0f7;
  padding: 10px
}

.new-doc-page section article .doc-table-options .doc-option > div:nth-child(2) {
  width: 70%;
  padding: 10px;
  border-right: 1px solid #eff0f7;
  border-left: 1px solid #eff0f7;
  font-size: 13px !important
}

.new-doc-page section article .doc-table-options .doc-option > div:nth-child(2) p {
  font-size: 13px !important
}

.new-doc-page section article .doc-table-options .doc-option p {
  margin: 0 !important
}
`
