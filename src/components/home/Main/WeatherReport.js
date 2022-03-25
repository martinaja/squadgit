import { useWeather } from '../../../hooks/useWeather';
import './weatherreport.css';

const WeatherReport = () => { // Componente que trae los datos del clima
	const [values, day] = useWeather(); // Utilizo la funcion de useWeather para traer los datos del clima

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
								<h1 className="titulo2">{values.country}</h1> {/*muestro el pais*/}
								<h1 className="titulo3">{values.city}</h1> {/*muestro la ciudad*/}
							</div>
						</div>
					</div>
				</section>
				<section className="section2">
					<div className="row row1">
						<div className="col col1">
							<div className="div2">
								<h1 className="day">{day}</h1> {/*muestro el dia*/}
								<h1 className="d-xxl-flex align-items-xxl-center clima">
									{values.weather} {/*muestro el clima*/}
								</h1>
							</div>
							<div className="div3">
								<p className="d-md-flex align-items-md-end temp">
									{values.temperature} {/*muestro la temperatura*/}
								</p>
							</div>
						</div>
						<div className="col div4">
							<div className="div5">
								<div className="col">
									<div className="col col2">
										<img src={values.img} alt="Icono"></img> {/*muestro la imagen*/}
									</div>
								</div>
							</div>
							<div className="text-end final">
								<h1 className="titulo4">{values.rain}</h1> {/*muestro la lluvia*/}
								<h1 className="text-end final2">{values.humidity}</h1> {/*muestro la humedad*/}
								<h1 className="text-end final3">{values.wind}</h1> {/*muestro la velocidad del viento*/}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default WeatherReport;
