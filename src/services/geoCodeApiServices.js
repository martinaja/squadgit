import { getGeoCodeApiBase } from './requestApiBase';

const baseUrl = process.env.REACT_APP_API_BASE_GEO_URL; // declaro la url base de la api traido desde las variables de entorno

export const getGeoCodes = (country, code) => { 	// Funcion que trae los codigos de pais y ciudad
	return getGeoCodeApiBase(baseUrl, country); // Utilizo la funcion de la api base para traer los codigos de pais y ciudad
};
