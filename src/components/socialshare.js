import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  PrintButton,
  FacebookShareCount,
  PinterestShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  PrintIcon,
} from 'react-share'

import Likes from './likes'

const SocialShare = () => (
<div style={{ display:'flex', 
		flexDirection: 'row', 
		maxWidth: '230px',
		justifyContent: 'space-between',
		marginTop: 5}}>

<a href="#">
<FacebookShareButton
            url={window.location.href}
            quote='GitHub'
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
	  </a>

<a href="#">
<TwitterShareButton
            url={window.location.href}
            quote='GitHub'
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
	  </a>
<a href="#">
<EmailShareButton
            url={window.location.href}
            quote='GitHub'
            className="Demo__some-network__share-button">
            <EmailIcon
              size={32}
              round />
          </EmailShareButton>
	  </a>
	  <a href="#">
<LinkedinShareButton
            url={window.location.href}
            quote='GitHub'
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
	  </a>

	<a href="#" style={{textDecoration: 'none'}}>
	<Likes />
	</a>
	  </div>
)


export default SocialShare