import React from 'react';
import { graphql } from "gatsby";
import PropTypes from 'prop-types';
import CardItem from './card.js';
import './card.css'; 

const CardDeck = ({ cards }) => (

	<div className="card-deck" >
    	    {cards.map((card, i) => (
              <CardItem {...card} key={i} />
            ))}
  	</div>
	);

CardDeck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardDeck;
