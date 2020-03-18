import 'purecss/build/pure.css';
import React from 'react';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';

import '../../styles/global.css';


class ContactForm extends React.Component {

	render() {
  	return (

<div className="siteContainer">

		<h1> Contact Us </h1>
		<h4> Please fill in your details. We will get back to you soon. </h4>
<form class="pure-form pure-form-aligned" action="https://getform.io/f/babe76a4-d41a-4f37-9f99-2df423ddf1cf" method="POST">
    <fieldset>
		<div class="g-recaptcha" data-sitekey="6LeU9eEUAAAAAEpMGssa2t4XAYUdq2Nwgs2q5_H-"></div>
        <div class="pure-control-group pure-u-3-4">
            <label for="firstname">First Name</label>
            <input id="firstname" type="text" name="firstname" placeholder="First Name" required/>
        </div>
        <div class="pure-control-group pure-u-3-4">
            <label for="lastname">Last Name</label>
            <input id="lastname" type="text" name="lastname"  placeholder="Last Name"/>
        </div>

        <div class="pure-control-group pure-u-3-4">
            <label for="phonenum">Phone Number</label>
            <input id="phonenum" type="tel" name="phonenum" placeholder="Phone Number"/>
        </div>

        <div class="pure-control-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" name="email" placeholder="Email Address" required/>
        </div>

        <div class="pure-control-group">
            <label for="briefdesc">Brief Description</label>
            <textarea id="briefdesc" name="briefdescription" placeholder="Please describe in brief what you would like to communicate ...">
		</textarea>
        </div>

        <div class="pure-controls">
	  <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
            <button type="submit" class="pure-button pure-button-primary">Submit</button>
        </div>
    </fieldset>

  </form>
</div>

    );
	}
}

export default ContactForm;
