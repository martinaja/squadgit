import { getWeatherApiBase } from './requestApiBase';

const baseUrl = process.env.REACT_APP_API_BASE_WEATHER_URL; // declaro la url base de la api traido desde las variables de entorno
const currentWeatherUrl = process.env.REACT_APP_API_CURRENT_WEATHER; 

export const getCurrentWeather = (lat, lon) => { // Funcion que trae el clima actual
	return getWeatherApiBase(`${baseUrl}${currentWeatherUrl}`, { // Utilizo la funcion de la api base para traer el clima actual
		lat, // Seteo los valores de latitud y longitud
		lon
	});
};
