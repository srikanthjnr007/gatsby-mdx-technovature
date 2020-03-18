import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from '../head/head.js';
import Header from '../header/header.js';
import favicon from '../images/favicon.ico';
import Helmet from 'react-helmet';

import '../../styles/global.css';


const Layout = ({ data, children }) => (
	<>
    <div className="siteContainer">
  <Helmet>
	<link rel="icon" href={favicon} />
	<link rel='stylesheet' type='text/css' href='../../styles/global.css' />
	<meta name="google-site-verification" content="P-r4DOT7vDNC2sXEVJPvou2arByWWUlIQ4aAi8BhCI0" />
	<script src="https://www.google.com/recaptcha/api.js?render=6LeU9eEUAAAAAEpMGssa2t4XAYUdq2Nwgs2q5_H-"></script>
<script>
       grecaptcha.ready(function() {
                grecaptcha.execute("6LeU9eEUAAAAAEpMGssa2t4XAYUdq2Nwgs2q5_H-", {action: "homepage"})
                .then(function(token) {                                     document.getElementById('captchaResponse').value = token;
                });
            });
	</script>

  </Helmet>

    <Head />
      <div className='siteContent'>

    <Header title={data.site.siteMetadata.title} />
        <main className="main">{children}</main>
	</div> 
        <footer>
          © {new Date().getFullYear()}, Technovature Software Solutions Pvt. Ltd. 
        </footer>
	</div>
	</>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
