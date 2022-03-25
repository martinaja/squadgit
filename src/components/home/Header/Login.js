import { useContext } from 'react';
import { Button } from 'reactstrap';
import './login.css';
import { loginContext } from '../../../context/LoginContext';
 
const Login = () => {
	const login = useContext(loginContext);  // Traigo el contexto del login para poder acceder a sus valores
	const { setEmail, setPassword, handleLogin } = login; // Desestrucuturo los valores del login 

	return (
		<form onSubmit={handleLogin}> 
			<div className="box">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div>
							<div className="text">
								<label className="form-label">Usuario</label>
							</div>
							<div className="textr">
								<input
									type="text"
									className="form-control"
									required
									onChange={e => setEmail(e.target.value)} // Seteo el valor del email
								/>
							</div>
							<div className="text-center d-md-flex justify-content-md-center align-items-md-end">
								<label>Contraseña</label>
							</div>
							<div className="text-center d-md-flex justify-content-md-center">
								<input
									type="password"
									className="form-control"
									required
									onChange={e => setPassword(e.target.value)} // Seteo el valor del password
								/>
							</div>
							<div className="text-center d-md-flex justify-content-md-center">
								<Button className="button" type="sumbit">
									INICIAR SESIÓN
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
