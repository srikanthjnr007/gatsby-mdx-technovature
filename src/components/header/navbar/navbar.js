import React, { Component } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'gatsby';
import Logo from '../images/logo.png';
import './navbar.css';


const li = [
            {
                link: "/",
                text:"Home"
            },
            {
                link: "/about/",
                text:"About"
            },
            {
                link: "/services/",
                text:"Services"
            },
            {
                link: "/blog/",
                text:"Blog"
            },
            {
                link: "/contact/",
                text:"Contact"
            }
 ];


export default class NavBar extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {

	 return (
          <>
              <div className="navBar">
		 <div class="leftnav">
		    <Link to="/"> 
     			<img src={Logo} alt="Technovature Software" width="120" />
		    </Link>
		 </div>

                    <button1 onClick={this.Toggle}>
                        <FaAlignRight />
                    </button1>
                    <ul className={this.state.toggle ? "links show-nav" : "links"}>
                        {
                            li.map((objLink, i) => {
                                return ( <li><a href={objLink.link}>{objLink.text}</a></li> )
                            })
                        }
                    </ul>
              </div>
          </>
        );
    }
}

