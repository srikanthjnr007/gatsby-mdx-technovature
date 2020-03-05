import React from 'react'
import ImageHolder from '../header-image.js' 
import '../about/card.css'

const SCards = () => (

<div style={{ 
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '40px',
	gridAutoFflow: 'column',
	marginBottom: '40px'
	}} >

		<div className='card'>
				<ImageHolder /> 
				<div className='container'>
				<h4><b>John Doe</b></h4> 
				<p>Architect & Engineer</p> 
				</div>
		</div>
		<div className='card'>
				<ImageHolder /> 
				<div className='container'>
				<h4><b>John Doe</b></h4> 
				<p>Architect & Engineer</p> 
				</div>
		</div>
		<div className='card'>
				<ImageHolder /> 
				<div className='container'>
				<h4><b>John Doe</b></h4> 
				<p>Architect & Engineer</p> 
			    <a href="www.yahoo.com"><p> <b> Learn More </b></p></a>
				</div>
		</div>
 </div>
	);

export default SCards;
