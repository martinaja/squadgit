import axios from 'axios'; //

const config = { 
	appid: '92d2f889c1f51b3506bde2531bf54577' // api key
};

export const getGeoCodeApiBase = (url, country) => { // Funcion que trae los codigos de pais y ciudad
	return axios.get(url, { // Utilizo el metdo get de axios para traer los codigos de pais y ciudad 
		params: { ...config, q: country, limit: 5 } // Seteo los parametros de la api
	}); // Retorno la respuesta de la api
};

export const getWeatherApiBase = async (url, coord) => { // Funcion que trae el clima actual
	return axios.get(url, { // Utilizo el metdo get de axios para traer el clima actual
		params: { ...config, ...coord, lang: 'sp' } // Seteo los parametros de la api
	}); // Retorno la respuesta de la api
};
