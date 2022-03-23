import { getWeatherApiBase } from './requestApiBase';

const baseUrl = process.env.REACT_APP_API_BASE_WEATHER_URL;
const currentWeatherUrl = process.env.REACT_APP_API_CURRENT_WEATHER;

export const getCurrentWeather = (lat, lon) => {
	return getWeatherApiBase(`${baseUrl}${currentWeatherUrl}`, {
		lat,
		lon
	});
};
