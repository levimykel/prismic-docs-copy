import React from 'react'
import FooterColumns from './FooterColumns'
import { footerStyles } from 'styles'

// Footer component
const Footer = ({ footer, footerRef }) => (
  <footer id="footer" ref={footerRef}>
    <hr className="medium-12" />
    <div className="bottom-footer row">
      <div className="logo-footer-wrapper small-order-4 medium-order-1 column small-12 medium-3">
        <img src="/doc-assets/images/logo-dark.svg" alt="Prismic" />
        <span>All rights reserved</span>
      </div>
      <FooterColumns footer={footer} />
    </div>
    <style jsx global>{footerStyles}</style>
  </footer>
)

export default Footer
