import React from 'react';
import PropTypes from 'prop-types';
import Api from '../../utils/api';
import Button from '../ui/Button';
import { withRouter } from 'react-router-dom';
import './WeatherForm.css';

class WeatherForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	location: ''
    }
  }

  onLocationChange = (event) => {
  	var value = event.target.value;
  	this.setState(() => {
  		return {
  			location : value
  		}
  	});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  	this.props.history.push({
      pathname: `/forecast/ ${this.state.location}`
    });
  }

  render() {
  	const name = this.props.name;
    return (
      <form name={name} noValidate className="weatherForm">
        <input 
        	id="location" 
        	type="text" 
        	placeholder="location" 
        	value={this.state.location}
        	onChange={this.onLocationChange}/>
        <Button onButtonClick={this.onFormSubmit}>Get Weather</Button>
      </form>
    );
  }
}
WeatherForm.propTypes = {
	name: PropTypes.string
}
export default withRouter(WeatherForm);