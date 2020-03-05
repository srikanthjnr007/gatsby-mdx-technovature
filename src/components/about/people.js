import React from 'react';
import PropTypes from 'prop-types';
import CardDeck from './carddeck.js';
import { graphql } from 'gatsby';

const People = ({ data }) => (
  <>
    <CardDeck items={data.aboutJson.gallery} />
  </>
);

People.propTypes = {
  data: PropTypes.object.isRequired,
};

export default People;

export const query = graphql`
  query AboutpageQuery {
    aboutJson {
      title
      gallery {
        name
        title
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
