import React from 'react';
import { Route } from 'react-router-dom';
import Preloader from './Preloader';
import ForecastItem from './ForecastItem';
import Api from '../utils/api';
import queryString from 'query-string';
import './Forecast.css';

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      forecast: null
    }
  }

  updateData = (city) => {
  	let qs = queryString.parse(this.props.location.search);
    Api.getWeather(city)
      .then((data) => {

        console.log(data);
        this.setState(()=>{
          return {
            weather: data.weather,
            forecast: data.forecast
          }
        })
      });
  }

  onForecastItemClick = (item, proxy, event) => {
    console.log(item);
    this.props.history.push({
      pathname: '/detail/' + item.dt, 
      state: item
    })
  }

  componentDidMount() {
    this.updateData(this.props.match.params.location);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.location !== prevProps.match.params.location) {
      this.updateData(this.props.match.params.location);
    }
  }

  render() {
    let forecast = this.state.forecast;
    console.log(forecast);
    return (
      <div className="horse">
        {forecast ?
          <div className="forecast">
            <h2 className="forecast-header">{forecast.city.name}</h2>
            <ul className="forecast-container">
              {forecast.list.map( (item, index) => {
                return (
                  <ForecastItem 
                    day={item} 
                    key={index} 
                    onItemClick={this.onForecastItemClick.bind(this, item)}/>
                )
              })}
            </ul>
          </div>
          :
          <Preloader/>
        }
      </div>
    );
  }
}

export default Forecast;