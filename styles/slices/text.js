import css from 'styled-jsx/css'

export const textStyles = css.global`
h2,
.new-doc-page main > div #content h3,
.new-doc-page main > div #content h4,
.new-doc-page main > div #content h5,
.new-doc-page main > div #content h6 {
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 15px;
}

.new-doc-page main > div #content p {
  letter-spacing: .2px;
  margin-bottom: .6em;
}

.new-doc-page main > div #content h1,
h2,
.new-doc-page main > div #content h3,
.new-doc-page main > div #content h4,
.new-doc-page main > div #content h5,
.new-doc-page main > div #content h6 {
  color: #2e2f42;
}

.new-doc-page main > div #content h1 {
  margin-bottom: 1rem;
  letter-spacing: .4px;
  font-size: 32px;
  font-weight: 400;
}

h2 {
  margin-top: 3rem;
  margin-bottom: 15px;
  letter-spacing: .4px;
  font-size: 1.2rem;
  font-weight: 500;
}

.new-doc-page main > div #content h3 {
  margin-top: 2rem;
  margin-bottom: 5px;
  font-size: 1rem;
}

.new-doc-page main > div #content h4 {
  font-size: 1.5625rem;
}

.new-doc-page main > div #content h5 {
  font-size: 1.25rem;
}

.new-doc-page main > div #content h6 {
  font-size: 1rem;
}

.new-doc-page main > div #content ol {
  margin-top: 1rem;
  font-weight: 500;
}

.new-doc-page main > div #content ol li {
  font-size: 15px;
  color: #434456;
}

.new-doc-page section span.codespan {
  border: 1px solid #e0e5eb;
  font-size: 12px;
  border-radius: 4px;
  padding: 4px 6px;
  background: #fafafd;
  font-family: Source Code Pro, Consolas, Liberation Mono, Menlo, Courier, monospace;
  color: #c43b3e;
  font-weight: 600;
  white-space: nowrap;
}

.new-doc-page section ul {
  line-height: 1.6em;
  list-style: disc;
  margin-bottom: 1em;
  padding-left: 40px;
}

.new-doc-page section div[data-oembed-provider=github][class] {
  display: none;
}

.new-doc-page section a {
  color: #4d92ce;
  text-decoration: none;
}

.new-doc-page section a:hover {
  text-decoration: underline;
}

.new-doc-page section strong {
  font-weight: 600;
}

.new-doc-page section em {
  font-style: italic;
}

.new-doc-page section iframe {
  width: 100%;
  height: 500px;
}`
