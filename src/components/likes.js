import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEnvelope, faKey, faThumbsUp);


class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      likes: 124,
      updated: false
    };

  }

  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

  render(){

    return(
<div style={{ display:'flex', flexDirection: 'row', width: '100%' }}>
        <p onClick={this.updateLikes}>
	<FontAwesomeIcon icon={faThumbsUp} style={{ color: 'blue' }} />
	    </p>
        <p>{this.state.likes} likes</p>
      </div>
    );
  }
}

export default Likes;
