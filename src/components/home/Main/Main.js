import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSearchWeather } from '../../../slices/searchSlice';
import SearchZones from './SearchZones';
import WeatherReport from './WeatherReport';
// import './main.css';

const Main = () => {
	const dispatch = useDispatch(); // Traigo el dispatch

	useEffect(() => {
		// Ejecuto la funcion de busqueda
		const weatherInterval = setInterval(() => {
			// Seteo el intervalo de busqueda
			dispatch(asyncSearchWeather()); // Ejecuto la funcion de busqueda
		}, 900000); // 15 min///

		return () => {
			// Si se desmonta el componente, se limpia el intervalo
			clearInterval(weatherInterval); // Limpio el intervalo
		};
	}, [dispatch]); // Seteo el dispatch

	return (
		// Retorno el componente
		<main>
			<section className="d-flex d-md-flex align-content-center justify-content-sm-start justify-content-md-center section1">
				<div className="container card1">
					<div className="row">
						<div className="col-md-12">
							<h4 className="text-center titulo1" style={{ margin: '2rem' }}>
								SERVICIO DEL CLIMA
							</h4>
							<hr></hr>
						</div>
					</div>
					<div className="row">
						<div className="col d-sm-flex justify-content-sm-center">
							<div className="col1"></div>
						</div>
					</div>
				</div>
			</section>

			<div className="container caja">
				<div className="row gap-3 justify-content-center">
					<SearchZones /> {/* Componente de busqueda de zonas */}
					<WeatherReport /> {/* Componente de reporte del clima */}
				</div>
			</div>
		</main>
	);
};

export default Main;
