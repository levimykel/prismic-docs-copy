import React from 'react'
import { homeCtaStyles } from 'styles'

// Homepage Cta component
const Cta = () => (
  <section>
    <div className="top-footer row align-middle">
      <div className="title column small-12 large-6">
        <h2>Get started for free</h2>
      </div>
      <div className="actions column small-12 large-6">
        <a href="mailto:contact@prismic.io">Request a demo</a>
        <a href="https://prismic.io/dashboard/new-repository/">Get started</a>
      </div>
    </div>
    <style jsx global>{homeCtaStyles}</style>
  </section>
)

export default Cta
