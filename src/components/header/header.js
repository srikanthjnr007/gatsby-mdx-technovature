import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';
import { Container } from './header.css';
import NavBar from './navbar/navbar.js';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <NavBar />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
