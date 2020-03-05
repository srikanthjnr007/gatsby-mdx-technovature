import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './card.css';

const CardItem = ({description, title}) => {

    return (
	<div className="card">
  	<div class="card-container">
    	<h4><b>{ title }</b></h4> 
    	<p>{ description }</p> 
  	</div>
</div>
	);
	};

CardItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
 
export default CardItem;
