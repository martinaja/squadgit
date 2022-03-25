import { useSelector } from 'react-redux';

export const useWeather = () => {
	const weatherData = useSelector(state => state.searchSlice.data); // Traigo el estado del clima

	const values = {
		country: weatherData?.sys?.country || 'País', // Seteo los valores del formulario

		city: weatherData?.name || 'Ciudad', 
		weather:
			weatherData?.weather[0].description[0].toUpperCase() + // Seteo los valores del formulario
				weatherData?.weather[0].description.slice(1) || 'Clima',  // Seteo los valores del formulario

		temperature: `${
			weatherData?.main.temp // Seteo los valores del formulario
				? Math.floor(weatherData?.main.temp - 273.15) // Utilizo metodo de math para redondear el valor
				: 0
		} °C`,

		img: `http://openweathermap.org/img/wn/${ // Seteo los valores del formulario
			weatherData?.weather[0].icon //
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

	let now = new Date(); // Seteo la fecha actual
	let days = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miercoles',
		'Jueves',
		'Viernes',
		'Sabado'
	];
	let day = days[now.getDay()]; // Traigo el dia de la semana

	return [values, day];
};
