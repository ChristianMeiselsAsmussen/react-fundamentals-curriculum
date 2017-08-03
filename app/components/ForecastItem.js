import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ForecastItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log("*", this.props.day);
    const { day, onItemClick } = this.props;
  	var clouds = day.clouds;
  	var weather = day.weather[0];
  	var img = "/app/images/weather-icons/" + weather.icon + ".svg";
  	var date = moment(day.dt, 'X').format('LLL');

    return (
      <li className="forecast-item" onClick={onItemClick}>
      	<img src={img} />
      	<p>{date}</p>
      </li>
    );
  }
}

ForecastItem.propTypes = {
	day : PropTypes.object.isRequired,
  onItemClick : PropTypes.func.isRequired
}

ForecastItem.defaultProps = {
	day : {} 
}

export default ForecastItem;