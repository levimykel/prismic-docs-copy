import React from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { homeHeaderStyles } from 'styles'

const HomeHeader = ({ pageContent }) => (
  <div className="docs-menu row">
    <div className="sdks-frameworks  small-12 medium-7 column" key="sdks-frameworks">
      <div className="sdks small-12">
        <h2>{RichText.asText(pageContent.data.header_title)}</h2>
        {RichText.render(pageContent.data.header_description)}
        {RichText.render(pageContent.data.api_clients_title)}
        <div className="items">
          {pageContent.data.api_clients.map((item, index) => (
            <LangLink item={item} key={`tech-lang-link-${index}`} />
          ))}
        </div>
      </div>
      <div className="frameworks small-12" key="frameworks">
        <h5>{RichText.asText(pageContent.data.frameworks_title)}</h5>
        <div className="items">
          {pageContent.data.frameworks.map((item, index) => (
            <LangLink item={item} key={`tech-lang-link-${index}`} />
          ))}
        </div>
      </div>
    </div>
    <div className="rest-api small-12 medium-5 column">
      <h4>{RichText.asText(pageContent.data.rest_api_title)}</h4>
      <div className="items">
        {pageContent.data.rest_api_links.map((item, index) => (
          <RestLink item={item} key={`tech-rest-link-${index}`} />
        ))}
      </div>
    </div>
    <style jsx global>{homeHeaderStyles}</style>
  </div>
)

const LangLink = ({ item }) => (
  <div className="techno">
    <DocLink link={item.link}>
      <img src={item.logo.url} alt={item.logo.alt = ''}/>
    </DocLink>
    <span className="label">
      <p>{item.label}</p>
    </span>
  </div>
)

const RestLink = ({ item }) => (
  <DocLink link={item.link}>
    <i className="icon-rarr" />
    <p>{RichText.asText(item.label)}</p>
  </DocLink>
)

export default HomeHeader
