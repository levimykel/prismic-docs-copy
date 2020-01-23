import css from 'styled-jsx/css'

export const typography = css.global`
body {
  font-family: Hind Vadodara, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #637091;
}

blockquote,
dd,
div,
dl,
dt,
form,
h1,
h2,
h3,
h4,
h5,
h6,
li,
ol,
p,
pre,
td,
th,
ul {
  margin: 0;
  padding: 0;
}

p {
  font-size: inherit;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-rendering: optimizeLegibility;
  letter-spacing: .4px;
}

em,
i {
  font-style: italic;
}

b,
em,
i,
strong {
  line-height: inherit;
}

b,
strong {
  font-weight: 700;
}

small {
  font-size: 80%;
  line-height: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Hind Vadodara, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #484a7a;
  text-rendering: optimizeLegibility;
  margin-top: 0;
  margin-bottom: .5rem;
  line-height: 1.4;
}

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  color: #cacaca;
  line-height: 0;
}

h1 {
  font-size: 1.875rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  margin-top: 1rem;
  margin-bottom: 5px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0;
}

h4 {
  font-size: 1.125rem;
}

h5 {
  font-size: 1.0625rem;
}

h6 {
  font-size: 1rem;
}

@media screen and (min-width:40em) {
  h1 {
    font-size: 2.8125rem;
  }

  h2 {
    font-size: 2.125rem;
  }

  h3 {
    font-size: 1rem;
  }

  h4 {
    font-size: 1.5625rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }
}

pre {
  margin-bottom: 1em;
}

a {
  color: #707b93;
  text-decoration: none;
  line-height: inherit;
  cursor: pointer;
}

a:focus,
a:hover {
  color: #606a7f;
}

a img,
hr {
  border: 0;
}

hr {
  max-width: 60rem;
  height: 0;
  border-bottom: 1px solid #cacaca;
  margin: 1.25rem auto;
  clear: both;
}

dl,
ol,
ul {
  line-height: 1.8;
  margin-bottom: 1rem;
  list-style-position: outside;
}

li {
  font-size: inherit;
}

ul {
  list-style-type: disc;
}

ol,
ul {
  margin-left: 1.25rem;
}

ol ol,
ol ul,
ul ol,
ul ul {
  margin-left: 1.25rem;
  margin-bottom: 0;
}

dl {
  margin-bottom: 1rem;
}

dl dt {
  margin-bottom: .3rem;
  font-weight: 700;
}

blockquote {
  margin: 0 0 1rem;
  padding: .5625rem 1.25rem 0 1.1875rem;
  border-left: 1px solid #cacaca;
}

blockquote,
blockquote p {
  line-height: 1.8;
  color: #8a8a8a;
}

cite {
  display: block;
  font-size: .8125rem;
  color: #8a8a8a;
}

cite:before {
  content: "\2014    ";
}

abbr {
  color: #6e7da2;
  cursor: help;
  border-bottom: 1px dotted #0a0a0a;
}

code {
  font-weight: 400;
  color: #506677;
  border: 1px solid #cacaca;
  padding: .125rem .3125rem .0625rem;
}

code,
kbd {
  font-family: Consolas, Liberation Mono, Courier, monospace;
  background-color: #e6e6e6;
}

kbd {
  padding: .125rem .25rem 0;
  margin: 0;
  color: #0a0a0a;
}

.subheader {
  margin-top: .2rem;
  margin-bottom: .5rem;
  font-weight: 400;
  line-height: 1.4;
  color: #8a8a8a;
}

.lead {
  font-size: 125%;
  line-height: 1.6;
}

.stat {
  font-size: 2.5rem;
  line-height: 1;
}

p+.stat {
  margin-top: -1rem;
}

.no-bullet {
  margin-left: 0;
  list-style: none;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.text-justify {
  text-align: justify;
}

@media screen and (min-width:40em) {
  .medium-text-left {
    text-align: left;
  }

  .medium-text-right {
    text-align: right;
  }

  .medium-text-center {
    text-align: center;
  }

  .medium-text-justify {
    text-align: justify;
  }
}

@media screen and (min-width:64em) {
  .large-text-left {
    text-align: left;
  }

  .large-text-right {
    text-align: right;
  }

  .large-text-center {
    text-align: center;
  }

  .large-text-justify {
    text-align: justify;
  }
}

@media screen and (min-width:75em) {
  .xlarge-text-left {
    text-align: left;
  }

  .xlarge-text-right {
    text-align: right;
  }

  .xlarge-text-center {
    text-align: center;
  }

  .xlarge-text-justify {
    text-align: justify;
  }
}

.show-for-print {
  display: none !important;
}

@media print {
  * {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  .show-for-print {
    display: block !important;
  }

  .hide-for-print {
    display: none !important;
  }

  table.show-for-print {
    display: table !important;
  }

  thead.show-for-print {
    display: table-header-group !important;
  }

  tbody.show-for-print {
    display: table-row-group !important;
  }

  tr.show-for-print {
    display: table-row !important;
  }

  td.show-for-print,
  th.show-for-print {
    display: table-cell !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " ("attr(href) ")";
  }

  .ir a:after,
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  abbr[title]:after {
    content: " ("attr(title) ")";
  }

  blockquote,
  pre {
    border: 1px solid #8a8a8a;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  img,
  tr {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  @page {
    margin: .5cm;
  }

  h2,
  h3,
  p {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}
`
