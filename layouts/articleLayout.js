import DefaultLayout from 'layouts'
import { TechNav } from 'components/layout'

// Article layout component
const ArticleLayout = ({ children, pageType, layout, footer, loggedIn, footerRef }) => (
  <DefaultLayout
    mainNav={layout.data.main_navigation}
    footer={footer}
    loggedIn={loggedIn}
    footerRef={footerRef}
  >
    <main className="documentation align-justify">
      <TechNav layout={layout} pageType={pageType} />
      <div>
        {children}
      </div>
    </main>
  </DefaultLayout>
)

export default ArticleLayout
