import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <h1>Austin's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span>
            {node.frontmatter.title} - {node.frontmatter.date}
            <p>{node.excerpt}</p>
          </span>
        </div>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
