import * as React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'
import { MainContent } from '../components/MainContent'

const HomeTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicHomepage.data

  return (
    <Layout isHomepage>
      <Seo title="Home" />
      <HomepageBanner
        title={RichText.asText(doc.banner_title.raw)}
        description={RichText.asText(doc.banner_description.raw)}
        linkUrl={doc.banner_link.url}
        linkLabel={RichText.asText(doc.banner_link_label.raw)}
        backgroundUrl={doc.banner_background.url}
      />
      <MainContent />
    </Layout>
  )
}

export const query = graphql`
  query Homepage {
    prismicHomepage {
      data {
        banner_title {
          raw
        }
        banner_description {
          raw
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          raw
        }
        banner_background {
          url
        }
      }
    }
  }
`

export default HomeTemplate
