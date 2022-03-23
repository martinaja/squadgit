import { useContext } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Login from './Login';
import './header.css';
import { loginContext } from '../../../context/LoginContext';

const Header = () => {
	const login = useContext(loginContext);
	const { open, setOpen, isLogged, setIsLogged } = login;

	return (
		<>
			<header className="d-sm-flex justify-content-sm-end align-items-sm-center header">
				<Modal isOpen={open} toggle={() => setOpen(!open)}>
					<ModalBody>
						<Login />
					</ModalBody>
				</Modal>
				{isLogged ? (
					<button
						onClick={() => {
							setIsLogged(false);
							localStorage.removeItem('login');
						}}
						className=" d-sm-flex justify-content-sm-center align-items-sm-center header"
						type="button"
					>
						CERRAR SESIÓN
					</button>
				) : (
					<button
						onClick={() => setOpen(!open)}
						className=" d-sm-flex justify-content-sm-center align-items-sm-center header"
						type="button"
					>
						INICIAR SESIÓN
						<i className="fa fa-user icon"></i>
					</button>
				)}
			</header>
		</>
	);
};

export default Header;
