import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout/layout.js'
import SEO from '../components/seo'
import Img from "gatsby-image"
import './blog.css'

const Article = styled('article')`
margin-bottom: 0.5em;
padding-bottom: 0.5rem;

p {
font-family: 'georgia', sans-serif;
font-size: 18px;
}

h3 {
  margin-Bottom: .5rem;
  text-align: left;
  font-size: 30px;
  font-style: semi-bold;
}


h3 a {
  color: #591a8b;
  padding: 0 0.125rem;
  transition: all 150ms linear;
  text-decoration: none;
  &:focus,
  &:active,
  &:hover {
    color: #380f6b;
    text-decoration: underline;
  }
}
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
	    <div className='blog-container'>
        

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
                <Link to={node.fields.slug}>
		  <Img fixed={node.frontmatter.featuredImage.childImageSharp.fixed} />
                </Link>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Article>
          )
        })}

	    </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {fileAbsolutePath: {regex: "/content/blog/"}}
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
	    featuredImage {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
          }
        }
      }
    }
  }
`
