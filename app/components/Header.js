import React from 'react';
import WeatherForm from './forms/WeatherForm';
import './Header.css';

export default class Header extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>Hello Main.js</h1>
        <WeatherForm name="headerform" />
      </header>
    );
  }
}
