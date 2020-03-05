import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Gallery from '../gallery/gallery.js';
import './card.css'; 

const AIServices = ({ data }) => {
  	return (
    <Gallery items={data.servicesJson.gallery} />
    );
};

AIServices.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AIServices;

export const query = graphql`
  query ServicesPageQuery {
    servicesJson {
      title
      gallery {
        title
        copy
        path
	description
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
