import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './card.css';

const CardItem = ({name, title, image}) => {

    return (
	<div className="card">
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={name} />
  	<div class="card-container">
    	<h4><b>{ name }</b></h4> 
    	<p>{ title }</p> 
  	</div>
</div>
	);
	};

CardItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object.isRequired,
};
 
export default CardItem;
