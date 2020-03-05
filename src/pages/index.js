import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo'
import Box from '../components/box/box.js';
import Title from '../components/title/title.js';
import Gallery from '../components/gallery/gallery.js';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
<SEO title="Home" />
    <Box>
      <Title as="h2" size="large" style={{ textTransform: 'upperCase'}}>
	Unlock Your True Business Potential With Digital Transformation.
      </Title>
      
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
   
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      gallery {
        title
        copy
        path
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
