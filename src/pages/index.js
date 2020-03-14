import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout.js';
import SEO from '../components/seo'
import Gallery from '../components/gallery/gallery.js';
import isoImg from "../images/iso-illustration.jpg";
import { graphql } from 'gatsby';
import HomeCarousel from "../components/carousel/carousel.js";

const Index = ({ data }) => (
  <Layout>
<SEO title="Home" />
	<HomeCarousel />
	<div style={{
		display:'grid',
		gridTemplateColumns: '50% 50%', 
		gridGap: '30px',
		gridAutoFlow: 'column',
		justifyContent:'center',
		alignItems: 'center',
	}} >
       <span style={{gridRow: '1', gridColumn: '1/2'}}> 
      		<h1 style={{
			fontSize: '2.5rem',
			textAlign: 'left',
			color: '#000033',
			textTransform: 'upperCase',
		}}>
		       Unlock Your True Business Potential With Digital Transformation.
      	         </h1>
	</span>
       <span style={{ gridRow: '1', gridColumn: '2/3'}}> 
	<img src={isoImg} alt="Technovature Software" width="150%" />
	</span>
	</div>
    <Gallery items={data.homeJson.gallery} />
   
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
            fixed(height: 180, width: 270, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
