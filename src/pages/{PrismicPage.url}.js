import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SliceZone } from '../components/SliceZone'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage

  return (
    <Layout>
      <SliceZone sliceZone={doc.data.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      data {
        document_display_name {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyFullWidthImage
          ...PageDataBodyImageGallery
          ...PageDataBodyImageHighlight
        }
      }
    }
  }
`

export default PageTemplate
