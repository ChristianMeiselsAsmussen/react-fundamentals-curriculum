import axios from 'axios';

const apiURL = 'http://api.openweathermap.org/data/2.5/';
const key = 'c4f31e3d42cbf254904e278dab3fb0aa';

const getCurrentWeather = (city) => {
	return axios.get(apiURL + 'weather?q=' + city + '&type=accurate&APPID=' + key)
		.then(response => response.data, error => error);
};
const getForecast = (city) => {

	return axios.get(apiURL + 'forecast/daily?q=' + city + '&type=accurate&cnt=5&APPID=' + key)
		.then(response => response.data, error => error);
};

module.exports = {

	getWeather: (city) => {
		return axios.all([getCurrentWeather(city), getForecast(city)])
			.then((data) => {
				return {
					weather: data[0],
					forecast: data[1]
				}
			});
	}
}