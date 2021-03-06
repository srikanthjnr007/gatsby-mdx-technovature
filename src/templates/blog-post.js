import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from "gatsby-image"
import Helmet from 'react-helmet'
import SocialShare from '../components/socialshare'

import Layout from '../components/layout/layout.js'
import SEO from '../components/seo'

import '../styles/global.css'


class BlogPostTemplate extends React.Component {

  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const myslug = this.props.data.mdx.fields.slug

    const { previous, next } = this.props.pageContext
    console.log(this.props.pageContext)
    const myurl = `${siteUrl}/${myslug}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
  <Helmet>
	<link rel='stylesheet' type='text/css' href='../styles/global.css' />
  </Helmet>
    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
            marginBottom: '0.5rem',
            marginTop: '0.5rem',
          }}
        >
         <p> <strong>Posted On:</strong> {post.frontmatter.date}, Author: {post.frontmatter.author} </p>
        </p>
	    <SocialShare url={myurl} />

        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: '0.5rem',
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
	siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
         slug
      }
      frontmatter {
        title
	author
        date(formatString: "MMMM DD, YYYY")
	    featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`
