import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSearchWeather } from '../../../slices/searchSlice';
import SearchZones from './SearchZones';
import WeatherReport from './WeatherReport';



const Main = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const weatherInterval = setInterval(() => {
			dispatch(asyncSearchWeather());
		}, 900000); // 15 min

		return () => {
			clearInterval(weatherInterval);
		};
	}, [dispatch]);

	return (
		<main>
			<section
				className="d-flex d-md-flex align-content-center justify-content-sm-start justify-content-md-center section1">
				<div className="container card1">
					<div className="row">
						<div className="col-md-12">
							<h4 className="text-center titulo1"
							 style={{ margin: "2rem" }}>
								SERVICIO DEL CLIMA
							</h4>
							<hr></hr>
						</div>
					</div>
					<div className="row">
						<div className="col d-sm-flex justify-content-sm-center">
							<div className='col1'></div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="container caja"
				
			>
				<div className="row">
					<SearchZones />
					<WeatherReport />
				</div>
			</div>
		</main>
	);
};

export default Main;
