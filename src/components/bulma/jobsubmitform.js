import React, { Component } from 'react';
import { Link } from 'gatsby'
import "../../styles/bulmaui.scss"

import { FaBeer } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

class JobForm extends React.Component {
	render() {
  	return (
<div class="container is-fluid" >

<form action="https://getform.io/f/babe76a4-d41a-4f37-9f99-2df423ddf1cf" method="POST">
<h1 class="title is-1 has-text-black">Contact Us</h1>
<h3 class="subtitle">Please fill in Your Details</h3>
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Your Name</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input is-success" type="text" name="firstname" placeholder="First Name"/>
        <span class="icon is-small is-left">
	  <FaUser />
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="text" name="lastname" placeholder="Last Name"/>
        <span class="icon is-small is-right">
	<FaCheck />
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">E-mail</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input is-success" type="email" name="email" placeholder="First Name"/>
        <span class="icon is-small is-left">
	  <FaEnvelope />
        </span>
      </p>
    </div>
</div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Phone</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input is-success" type="tel" name="phone" placeholder="Phone Number"/>
        <span class="icon is-small is-left">
	  <FaPhone />
        </span>
      </p>
    </div>
</div>
</div>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select name="department" >
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" name="brieftext" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
</form>

</div>


    );
	}
}

export default JobForm;
