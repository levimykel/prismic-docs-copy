import css from 'styled-jsx/css'

export const grid = css.global`
.row {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-flow: row wrap
}

.row .row {
  max-width: none;
  margin-left: -1.25rem;
  margin-right: -1.25rem
}

@media screen and (min-width:40em) {
  .row .row {
    margin-left: -1.25rem;
    margin-right: -1.25rem
  }
}

@media screen and (min-width:64em) {
  .row .row {
    margin-left: -.625rem;
    margin-right: -.625rem
  }
}

@media screen and (min-width:75em) {
  .row .row {
    margin-left: -.625rem;
    margin-right: -.625rem
  }
}

@media screen and (min-width:90em) {
  .row .row {
    margin-left: -.625rem;
    margin-right: -.625rem
  }
}

.row.expanded {
  max-width: none
}

.row.collapse>.column,
.row.collapse>.columns {
  padding-left: 0;
  padding-right: 0
}

.column,
.columns {
  flex: 1 1 0px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  min-width: 0
}

@media screen and (min-width:40em) {

  .column,
  .columns {
    padding-left: 1.25rem;
    padding-right: 1.25rem
  }
}

@media screen and (min-width:64em) {

  .column,
  .columns {
    padding-left: .625rem;
    padding-right: .625rem
  }
}

@media screen and (min-width:75em) {

  .column,
  .columns {
    padding-left: .625rem;
    padding-right: .625rem
  }
}

@media screen and (min-width:90em) {

  .column,
  .columns {
    padding-left: .625rem;
    padding-right: .625rem
  }
}

.column.row.row,
.row.row.columns {
  float: none;
  display: block
}

.row .column.row.row,
.row .row.row.columns {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0
}

.small-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%
}

.small-offset-0 {
  margin-left: 0
}

.small-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%
}

.small-offset-1 {
  margin-left: 8.33333%
}

.small-3 {
  flex: 0 0 25%;
  max-width: 25%
}

.small-offset-2 {
  margin-left: 16.66667%
}

.small-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%
}

.small-offset-3 {
  margin-left: 25%
}

.small-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%
}

.small-offset-4 {
  margin-left: 33.33333%
}

.small-6 {
  flex: 0 0 50%;
  max-width: 50%
}

.small-offset-5 {
  margin-left: 41.66667%
}

.small-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%
}

.small-offset-6 {
  margin-left: 50%
}

.small-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%
}

.small-offset-7 {
  margin-left: 58.33333%
}

.small-9 {
  flex: 0 0 75%;
  max-width: 75%
}

.small-offset-8 {
  margin-left: 66.66667%
}

.small-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%
}

.small-offset-9 {
  margin-left: 75%
}

.small-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%
}

.small-offset-10 {
  margin-left: 83.33333%
}

.small-12 {
  flex: 0 0 100%;
  max-width: 100%
}

.small-offset-11 {
  margin-left: 91.66667%
}

.small-up-1 {
  flex-wrap: wrap
}

.small-up-1>.column,
.small-up-1>.columns {
  flex: 0 0 100%;
  max-width: 100%
}

.small-up-2 {
  flex-wrap: wrap
}

.small-up-2>.column,
.small-up-2>.columns {
  flex: 0 0 50%;
  max-width: 50%
}

.small-up-3 {
  flex-wrap: wrap
}

.small-up-3>.column,
.small-up-3>.columns {
  flex: 0 0 33.33333%;
  max-width: 33.33333%
}

.small-up-4 {
  flex-wrap: wrap
}

.small-up-4>.column,
.small-up-4>.columns {
  flex: 0 0 25%;
  max-width: 25%
}

.small-up-5 {
  flex-wrap: wrap
}

.small-up-5>.column,
.small-up-5>.columns {
  flex: 0 0 20%;
  max-width: 20%
}

.small-up-6 {
  flex-wrap: wrap
}

.small-up-6>.column,
.small-up-6>.columns {
  flex: 0 0 16.66667%;
  max-width: 16.66667%
}

.small-up-7 {
  flex-wrap: wrap
}

.small-up-7>.column,
.small-up-7>.columns {
  flex: 0 0 14.28571%;
  max-width: 14.28571%
}

.small-up-8 {
  flex-wrap: wrap
}

.small-up-8>.column,
.small-up-8>.columns {
  flex: 0 0 12.5%;
  max-width: 12.5%
}

.small-collapse>.column,
.small-collapse>.columns {
  padding-left: 0;
  padding-right: 0
}

.small-uncollapse>.column,
.small-uncollapse>.columns {
  padding-left: 1.25rem;
  padding-right: 1.25rem
}

@media screen and (min-width:40em) {
  .medium-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
  }

  .medium-offset-0 {
    margin-left: 0
  }

  .medium-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .medium-offset-1 {
    margin-left: 8.33333%
  }

  .medium-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .medium-offset-2 {
    margin-left: 16.66667%
  }

  .medium-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .medium-offset-3 {
    margin-left: 25%
  }

  .medium-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
  }

  .medium-offset-4 {
    margin-left: 33.33333%
  }

  .medium-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .medium-offset-5 {
    margin-left: 41.66667%
  }

  .medium-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%
  }

  .medium-offset-6 {
    margin-left: 50%
  }

  .medium-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%
  }

  .medium-offset-7 {
    margin-left: 58.33333%
  }

  .medium-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .medium-offset-8 {
    margin-left: 66.66667%
  }

  .medium-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
  }

  .medium-offset-9 {
    margin-left: 75%
  }

  .medium-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%
  }

  .medium-offset-10 {
    margin-left: 83.33333%
  }

  .medium-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .medium-offset-11 {
    margin-left: 91.66667%
  }

  .medium-order-1 {
    order: 1
  }

  .medium-order-2 {
    order: 2
  }

  .medium-order-3 {
    order: 3
  }

  .medium-order-4 {
    order: 4
  }

  .medium-order-5 {
    order: 5
  }

  .medium-order-6 {
    order: 6
  }

  .medium-up-1 {
    flex-wrap: wrap
  }

  .medium-up-1>.column,
  .medium-up-1>.columns {
    flex: 0 0 100%;
    max-width: 100%
  }

  .medium-up-2 {
    flex-wrap: wrap
  }

  .medium-up-2>.column,
  .medium-up-2>.columns {
    flex: 0 0 50%;
    max-width: 50%
  }

  .medium-up-3 {
    flex-wrap: wrap
  }

  .medium-up-3>.column,
  .medium-up-3>.columns {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .medium-up-4 {
    flex-wrap: wrap
  }

  .medium-up-4>.column,
  .medium-up-4>.columns {
    flex: 0 0 25%;
    max-width: 25%
  }

  .medium-up-5 {
    flex-wrap: wrap
  }

  .medium-up-5>.column,
  .medium-up-5>.columns {
    flex: 0 0 20%;
    max-width: 20%
  }

  .medium-up-6 {
    flex-wrap: wrap
  }

  .medium-up-6>.column,
  .medium-up-6>.columns {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .medium-up-7 {
    flex-wrap: wrap
  }

  .medium-up-7>.column,
  .medium-up-7>.columns {
    flex: 0 0 14.28571%;
    max-width: 14.28571%
  }

  .medium-up-8 {
    flex-wrap: wrap
  }

  .medium-up-8>.column,
  .medium-up-8>.columns {
    flex: 0 0 12.5%;
    max-width: 12.5%
  }
}

@media screen and (min-width:40em) and (min-width:40em) {
  .medium-expand {
    flex: 1 1 0px
  }
}

.row.medium-unstack>.column,
.row.medium-unstack>.columns {
  flex: 0 0 100%
}

@media screen and (min-width:40em) {

  .row.medium-unstack>.column,
  .row.medium-unstack>.columns {
    flex: 1 1 0px
  }
}

@media screen and (min-width:40em) {

  .medium-collapse>.column,
  .medium-collapse>.columns {
    padding-left: 0;
    padding-right: 0
  }

  .medium-uncollapse>.column,
  .medium-uncollapse>.columns {
    padding-left: 1.25rem;
    padding-right: 1.25rem
  }
}

@media screen and (min-width:64em) {
  .large-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
  }

  .large-offset-0 {
    margin-left: 0
  }

  .large-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .large-offset-1 {
    margin-left: 8.33333%
  }

  .large-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .large-offset-2 {
    margin-left: 16.66667%
  }

  .large-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .large-offset-3 {
    margin-left: 25%
  }

  .large-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
  }

  .large-offset-4 {
    margin-left: 33.33333%
  }

  .large-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .large-offset-5 {
    margin-left: 41.66667%
  }

  .large-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%
  }

  .large-offset-6 {
    margin-left: 50%
  }

  .large-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%
  }

  .large-offset-7 {
    margin-left: 58.33333%
  }

  .large-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .large-offset-8 {
    margin-left: 66.66667%
  }

  .large-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
  }

  .large-offset-9 {
    margin-left: 75%
  }

  .large-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%
  }

  .large-offset-10 {
    margin-left: 83.33333%
  }

  .large-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .large-offset-11 {
    margin-left: 91.66667%
  }

  .large-order-1 {
    order: 1
  }

  .large-order-2 {
    order: 2
  }

  .large-order-3 {
    order: 3
  }

  .large-order-4 {
    order: 4
  }

  .large-order-5 {
    order: 5
  }

  .large-order-6 {
    order: 6
  }

  .large-up-1 {
    flex-wrap: wrap
  }

  .large-up-1>.column,
  .large-up-1>.columns {
    flex: 0 0 100%;
    max-width: 100%
  }

  .large-up-2 {
    flex-wrap: wrap
  }

  .large-up-2>.column,
  .large-up-2>.columns {
    flex: 0 0 50%;
    max-width: 50%
  }

  .large-up-3 {
    flex-wrap: wrap
  }

  .large-up-3>.column,
  .large-up-3>.columns {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .large-up-4 {
    flex-wrap: wrap
  }

  .large-up-4>.column,
  .large-up-4>.columns {
    flex: 0 0 25%;
    max-width: 25%
  }

  .large-up-5 {
    flex-wrap: wrap
  }

  .large-up-5>.column,
  .large-up-5>.columns {
    flex: 0 0 20%;
    max-width: 20%
  }

  .large-up-6 {
    flex-wrap: wrap
  }

  .large-up-6>.column,
  .large-up-6>.columns {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .large-up-7 {
    flex-wrap: wrap
  }

  .large-up-7>.column,
  .large-up-7>.columns {
    flex: 0 0 14.28571%;
    max-width: 14.28571%
  }

  .large-up-8 {
    flex-wrap: wrap
  }

  .large-up-8>.column,
  .large-up-8>.columns {
    flex: 0 0 12.5%;
    max-width: 12.5%
  }
}

@media screen and (min-width:64em) and (min-width:64em) {
  .large-expand {
    flex: 1 1 0px
  }
}

.row.large-unstack>.column,
.row.large-unstack>.columns {
  flex: 0 0 100%
}

@media screen and (min-width:64em) {

  .row.large-unstack>.column,
  .row.large-unstack>.columns {
    flex: 1 1 0px
  }
}

@media screen and (min-width:64em) {

  .large-collapse>.column,
  .large-collapse>.columns {
    padding-left: 0;
    padding-right: 0
  }

  .large-uncollapse>.column,
  .large-uncollapse>.columns {
    padding-left: .625rem;
    padding-right: .625rem
  }
}

@media screen and (min-width:75em) {
  .xlarge-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%
  }

  .xlarge-offset-0 {
    margin-left: 0
  }

  .xlarge-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .xlarge-offset-1 {
    margin-left: 8.33333%
  }

  .xlarge-3 {
    flex: 0 0 25%;
    max-width: 25%
  }

  .xlarge-offset-2 {
    margin-left: 16.66667%
  }

  .xlarge-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .xlarge-offset-3 {
    margin-left: 25%
  }

  .xlarge-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%
  }

  .xlarge-offset-4 {
    margin-left: 33.33333%
  }

  .xlarge-6 {
    flex: 0 0 50%;
    max-width: 50%
  }

  .xlarge-offset-5 {
    margin-left: 41.66667%
  }

  .xlarge-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%
  }

  .xlarge-offset-6 {
    margin-left: 50%
  }

  .xlarge-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%
  }

  .xlarge-offset-7 {
    margin-left: 58.33333%
  }

  .xlarge-9 {
    flex: 0 0 75%;
    max-width: 75%
  }

  .xlarge-offset-8 {
    margin-left: 66.66667%
  }

  .xlarge-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%
  }

  .xlarge-offset-9 {
    margin-left: 75%
  }

  .xlarge-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%
  }

  .xlarge-offset-10 {
    margin-left: 83.33333%
  }

  .xlarge-12 {
    flex: 0 0 100%;
    max-width: 100%
  }

  .xlarge-offset-11 {
    margin-left: 91.66667%
  }

  .xlarge-order-1 {
    order: 1
  }

  .xlarge-order-2 {
    order: 2
  }

  .xlarge-order-3 {
    order: 3
  }

  .xlarge-order-4 {
    order: 4
  }

  .xlarge-order-5 {
    order: 5
  }

  .xlarge-order-6 {
    order: 6
  }

  .xlarge-up-1 {
    flex-wrap: wrap
  }

  .xlarge-up-1>.column,
  .xlarge-up-1>.columns {
    flex: 0 0 100%;
    max-width: 100%
  }

  .xlarge-up-2 {
    flex-wrap: wrap
  }

  .xlarge-up-2>.column,
  .xlarge-up-2>.columns {
    flex: 0 0 50%;
    max-width: 50%
  }

  .xlarge-up-3 {
    flex-wrap: wrap
  }

  .xlarge-up-3>.column,
  .xlarge-up-3>.columns {
    flex: 0 0 33.33333%;
    max-width: 33.33333%
  }

  .xlarge-up-4 {
    flex-wrap: wrap
  }

  .xlarge-up-4>.column,
  .xlarge-up-4>.columns {
    flex: 0 0 25%;
    max-width: 25%
  }

  .xlarge-up-5 {
    flex-wrap: wrap
  }

  .xlarge-up-5>.column,
  .xlarge-up-5>.columns {
    flex: 0 0 20%;
    max-width: 20%
  }

  .xlarge-up-6 {
    flex-wrap: wrap
  }

  .xlarge-up-6>.column,
  .xlarge-up-6>.columns {
    flex: 0 0 16.66667%;
    max-width: 16.66667%
  }

  .xlarge-up-7 {
    flex-wrap: wrap
  }

  .xlarge-up-7>.column,
  .xlarge-up-7>.columns {
    flex: 0 0 14.28571%;
    max-width: 14.28571%
  }

  .xlarge-up-8 {
    flex-wrap: wrap
  }

  .xlarge-up-8>.column,
  .xlarge-up-8>.columns {
    flex: 0 0 12.5%;
    max-width: 12.5%
  }
}

@media screen and (min-width:75em) and (min-width:75em) {
  .xlarge-expand {
    flex: 1 1 0px
  }
}

.row.xlarge-unstack>.column,
.row.xlarge-unstack>.columns {
  flex: 0 0 100%
}

@media screen and (min-width:75em) {

  .row.xlarge-unstack>.column,
  .row.xlarge-unstack>.columns {
    flex: 1 1 0px
  }
}

@media screen and (min-width:75em) {

  .xlarge-collapse>.column,
  .xlarge-collapse>.columns {
    padding-left: 0;
    padding-right: 0
  }

  .xlarge-uncollapse>.column,
  .xlarge-uncollapse>.columns {
    padding-left: .625rem;
    padding-right: .625rem
  }
}

.shrink {
  flex: 0 0 auto;
  max-width: 100%
}

.align-top.columns,
.column.align-top {
  align-self: flex-start
}

.align-bottom.columns,
.column.align-bottom {
  align-self: flex-end
}

.align-middle.columns,
.column.align-middle {
  align-self: center
}

.align-stretch.columns,
.column.align-stretch {
  align-self: stretch
}

.align-right {
  justify-content: flex-end
}

.align-center {
  justify-content: center
}

.align-justify {
  justify-content: space-between
}

.align-spaced {
  justify-content: space-around
}

.align-top {
  align-items: flex-start
}

.align-self-top {
  align-self: flex-start
}

.align-bottom {
  align-items: flex-end
}

.align-self-bottom {
  align-self: flex-end
}

.align-middle {
  align-items: center
}

.align-self-middle {
  align-self: center
}

.align-stretch {
  align-items: stretch
}

.align-self-stretch {
  align-self: stretch
}

.small-order-1 {
  order: 1
}

.small-order-2 {
  order: 2
}

.small-order-3 {
  order: 3
}

.small-order-4 {
  order: 4
}

.small-order-5 {
  order: 5
}

.small-order-6 {
  order: 6
}

@media screen and (min-width:40em) {
  .medium-order-1 {
    order: 1
  }

  .medium-order-2 {
    order: 2
  }

  .medium-order-3 {
    order: 3
  }

  .medium-order-4 {
    order: 4
  }

  .medium-order-5 {
    order: 5
  }

  .medium-order-6 {
    order: 6
  }
}

@media screen and (min-width:64em) {
  .large-order-1 {
    order: 1
  }

  .large-order-2 {
    order: 2
  }

  .large-order-3 {
    order: 3
  }

  .large-order-4 {
    order: 4
  }

  .large-order-5 {
    order: 5
  }

  .large-order-6 {
    order: 6
  }
}

@media screen and (min-width:75em) {
  .xlarge-order-1 {
    order: 1
  }

  .xlarge-order-2 {
    order: 2
  }

  .xlarge-order-3 {
    order: 3
  }

  .xlarge-order-4 {
    order: 4
  }

  .xlarge-order-5 {
    order: 5
  }

  .xlarge-order-6 {
    order: 6
  }
}
`
