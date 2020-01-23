import { Fragment } from 'react'
import { Footer, Navigation, Meta } from 'components/layout'

// Default layout component
const DefaultLayout = ({ children, mainNav, footer, loggedIn, pageId, footerRef }) => {

  return (
    <Fragment>
      <main id={pageId}>
        <Meta />
        <Navigation mainNav={mainNav} loggedIn={loggedIn} />
        {children}
        <Footer footer={footer} footerRef={footerRef} />
      </main>
    </Fragment>
  )
}

export default DefaultLayout
