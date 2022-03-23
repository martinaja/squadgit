import { useSelector } from 'react-redux';

export const useWeather = () => {
	const weatherData = useSelector(state => state.searchSlice.data);

	const values = {
		country: weatherData?.sys?.country || 'País',

		city: weatherData?.name || 'Ciudad',

		weather:
			weatherData?.weather[0].description[0].toUpperCase() +
				weatherData?.weather[0].description.slice(1) || 'Clima',

		temperature: `${
			weatherData?.main.temp
				? Math.floor(weatherData?.main.temp - 273.15)
				: 0
		} °C`,

		img: `http://openweathermap.org/img/wn/${
			weatherData?.weather[0].icon
				? weatherData?.weather[0].icon
				: '01d'
		}@2x.png`,

		humidity: `Humedad 
		${weatherData?.main.humidity ? weatherData?.main.humidity : 0} % `,

		rain: `Precipitaciones  ${
			weatherData?.rain ? weatherData?.rain['1h'] * 100 : 0
		}  %`,

		wind:
			`${
				weatherData?.wind.speed
					? Math.ceil(weatherData?.wind.speed / 0.6214)
					: 0
			}  Km/h` || 'Viento'
	};

	let now = new Date();
	let days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado'
	];
	let day = days[now.getDay()];

	return [values, day];
};
