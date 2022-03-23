import axios from 'axios';

const config = {
	appid: '92d2f889c1f51b3506bde2531bf54577'
};

export const getGeoCodeApiBase = (url, country) => {
	return axios.get(url, {
		params: { ...config, q: country, limit: 5 }
	});
};

export const getWeatherApiBase = async (url, coord) => {
	return axios.get(url, {
		params: { ...config, ...coord, lang: 'sp' }
	});
};
