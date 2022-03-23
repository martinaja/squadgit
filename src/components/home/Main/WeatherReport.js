import { useWeather } from '../../../hooks/useWeather';
import './weatherreport.css';

const WeatherReport = () => {
	const [values, day] = useWeather();

	return (
		<div className="col card">
			<div>
				<h1 className="text-center d-sm-flex justify-content-sm-center align-items-sm-end titulo">
					Reporte diario
				</h1>
				<div className="row ">
					<div className="col d-sm-flex justify-content-sm-center fila ">
						<div></div>
					</div>
				</div>
				<section className="section">
					<div className="row">
						<div className="col card2">
							<div></div>
							<div>
								<h1 className="titulo2">{values.country}</h1>
								<h1 className="titulo3">{values.city}</h1>
							</div>
						</div>
					</div>
				</section>
				<section className="section2">
					<div className="row row1">
						<div className="col col1">
							<div className="div2">
								<h1 className="day">{day}</h1>
								<h1 className="d-xxl-flex align-items-xxl-center clima">
									{values.weather}
								</h1>
							</div>
							<div className="div3">
								<p className="d-md-flex align-items-md-end temp">
									{values.temperature}
								</p>
							</div>
						</div>
						<div className="col div4">
							<div className="div5">
								<div className="col">
									<div className="col col2">
										<img src={values.img} alt="Icono"></img>
									</div>
								</div>
							</div>
							<div className="text-end final">
								<h1 className="titulo4">{values.rain}</h1>
								<h1 className="text-end final2">{values.humidity}</h1>
								<h1 className="text-end final3">{values.wind}</h1>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default WeatherReport;
