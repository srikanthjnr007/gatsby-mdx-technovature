import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types";

const ImageHolder = ({ props }) => {

	return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <Img fixed={data.imgOne.childImageSharp.fixed} />
        </>
      )}
    />
  );
};

ImageHolder.propTypes = {
  data: PropTypes.object.isRequired
};


export const query = graphql`
  query {
    imgOne: file(relativePath: { eq: "images/gallery/ai.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
export default ImageHolder;
