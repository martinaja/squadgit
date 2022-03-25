import { useContext } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import Login from './Login';
import './header.css';
import { loginContext } from '../../../context/LoginContext';

const Header = () => {
    const login = useContext(loginContext);
    const { open, setOpen, isLogged, setIsLogged, email } = login;

    return (
        <>
            <header className="header">
                <Modal isOpen={open} toggle={() => setOpen(!open)}>
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </Modal>
                {isLogged ? <p className="user">Bienvenido {email}</p> : <p className="user">Bienvenido Invitado</p>}
                {/* Cambiar el nombre del boton removiendo el login del localstorage*/}
                {isLogged ? (
                    <button
                        className="button-login"
                        onClick={() => {
                            // Funcion que cierra la sesion
                            setIsLogged(false); // Seteo el estado de la sesion
                            localStorage.removeItem('login'); // Remuevo el login del localstorage
                        }}
                        type="button"
                    >
                        CERRAR SESIÓN
                    </button>
                ) : (
                    <button
                        className="button-login"
                        onClick={() => setOpen(!open)} // Funcion que abre la sesion
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