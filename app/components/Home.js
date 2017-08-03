import React from 'react';
import WeatherForm from './forms/WeatherForm';
import './Home.css'

export default class Home extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <h2>Enter a City or State</h2>
        <WeatherForm name="homeform" />
      </div>
    );
  }
}
