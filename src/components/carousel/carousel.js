import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';

import Image1 from "./images/webp/blockchain.webp";
import Image2 from "./images/webp/ai.webp";
import Image3 from "./images/webp/bigdata.webp";

import "./carousel.css";


const HomeSlider = () => (
<Slider classNames={horizontalCss} autoplay={3000} >
		<div style={{ background: `url(${Image1}) no-repeat center center` }} >
			<div className="divCenter">
				<h1 style={{color:'#f5f0f0'}}>Blockchain Technology</h1>
				<h4 style={{color:'#f5f0f0'}}>Explore Wide Applications </h4>
				<Link to={`/services/blockchain/`} style={{ textDecoration: 'none' }}>
				<button style={{color:'white', fontSize: '16px',
						backgroundColor:'#000033'}}>Learn More</button>
				</Link>
			</div>
		</div>
		<div style={{ background: `url(${Image2}) no-repeat center center` }} >
			<div className="divCenter">
				<h1 className="txtColor">Reach New Frontiers</h1>
				<h4> With our Artificial Intelligence capabilities </h4>
				<Link to={`/services/ai/`} style={{ textDecoration: 'none' }}>
				<button style={{color:'#ffffff', fontSize: '16px',
						backgroundColor:'#0686E4'}}>Learn More</button>
				</Link>
			</div>
		</div>
		<div style={{ background: `url(${Image3}) no-repeat center center` }} >
			<div className="divCenter">
				<h1 className="txtColor"> Discover New Insights</h1>
				<h4> With our Data Sciences expertise </h4>
				<Link to={`/services/bigdata/`} style={{ textDecoration: 'none' }}>
				<button style={{color:'#ffffff', fontSize: '16px',
						backgroundColor:'#0686E4'}}>Learn More</button>
				</Link>
			</div>
		</div>
</Slider>
);

export default HomeSlider;
