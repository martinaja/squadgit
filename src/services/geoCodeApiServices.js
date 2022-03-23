import { getGeoCodeApiBase } from './requestApiBase';

const baseUrl = process.env.REACT_APP_API_BASE_GEO_URL;

export const getGeoCodes = (country, code) => {
	return getGeoCodeApiBase(baseUrl, country);
};
