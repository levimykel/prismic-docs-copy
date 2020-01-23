import css from 'styled-jsx/css'

export const codeStyles = css.global`
.tabs .tabs-items {
  margin: 0;
  padding: 0;
}

.tabs .tabs-items .tabs-item {
  padding: 5px 10px;
  display: inline;
  cursor: pointer;
  background-color: #fff;
  color: #6e7da2;
  margin-left: 0;
  font-size: 12px;
}

.tabs .tabs-items .tabs-item.tabs-item--active {
  background-color: #f8f8fc;
  font-weight: 700;
}

.tabs .tabs-content {
  display: none;
}

.tabs .tabs-content.tabs-content--active {
  display: block;
}

.doc-source-code {
  position: relative;
  width: 100%;
  max-width: 100%;
}

.doc-source-code .copy-source-code {
  visibility: hidden;
}

@media screen and (min-width:40em) {
  .doc-source-code .copy-source-code {
    visibility: visible;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 10px;
    background-color: #ebeef3;
    padding: 4px 8px;
    font-size: 12px;
    color: #5c5e6c;
    font-weight: 500;
    border-radius: 10%;
  }
}

.doc-source-code .copy-source-code:active {
  background-color: #e0e5eb
}

.doc-source-code .text-wrapper p {
  max-width: 70rem;
  line-height: 1.2rem;
  margin: 1rem 0
}

.new-doc-page main > div #content .doc-source-code {
  margin: 1rem 0
}

.new-doc-page main > div #content .tabs.doc-define-code-tmpl ul.tabs-items {
  -webkit-transform: translateY(.5rem);
  transform: translateY(.5rem)
}

.new-doc-page main > div #content .tabs.doc-define-code-tmpl ul.tabs-items li {
  padding: 5px 7px;
  background: none;
  color: #4d92ce
}

.new-doc-page main > div #content .tabs.doc-define-code-tmpl ul.tabs-items li.tabs-item--active {
  color: #434456;
  font-weight: 500
}

.hljs {
  font-family: Source Code Pro, Inconsolata, monospace;
  border-radius: 4px;
  border: none;
  background: #fafafd;
  font-weight: 400;
  font-size: 13px;
  display: block;
  overflow-x: auto;
  padding: 1em 2em;
  line-height: 22px
}

.hljs-ln-numbers .hljs-ln-line:before {
  color: #bfc9d6;
  margin-right: 20px
}

.doc-source-code .hljs.single-line {
  padding-right: 75px;
}

.hljs-ln td.hljs-ln-code {
  padding-right: 70px;
}

.hljs,
.hljs-subst {
  color: #5b5d6b
}

.hljs-addition,
.hljs-meta,
.hljs-string,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable {
  color: #756bb1;
  font-weight: 500
}

.hljs-comment,
.hljs-quote {
  color: #bfc9d6
}

.hljs-bullet,
.hljs-link,
.hljs-literal,
.hljs-number,
.hljs-regexp {
  color: #31a354;
  font-weight: 500
}

.hljs-deletion,
.hljs-variable {
  color: #88f;
  font-weight: 500
}

.hljs-built_in,
.hljs-doctag,
.hljs-keyword,
.hljs-name,
.hljs-section,
.hljs-selector-class,
.hljs-selector-id,
.hljs-selector-tag,
.hljs-strong,
.hljs-tag,
.hljs-title,
.hljs-type {
  color: #3182bd;
  font-weight: 500
}

.hljs-emphasis {
  font-style: italic;
  font-weight: 500
}

.hljs-attribute {
  color: #178666;
  font-weight: 500
}
`
