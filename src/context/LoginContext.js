import { createContext, useState } from 'react';

export const loginContext = createContext();

const LoginContext = ({ children }) => { // children es el componente que se esta renderizando
	const [email, setEmail] = useState(''); // Seteo el valor del email que proviene del login
	const [password, setPassword] = useState(''); // Seteo el valor del password que proviene del login
	const [open, setOpen] = useState(false); // Seteo el valor del open que permite abrir el modal del login
	const [isLogged, setIsLogged] = useState(false); // Seteo el valor del isLogged que permite saber si el usuario esta logueado o no

	const handleLogin = e => { // Funcion que permite hacer el login
		e.preventDefault(); // Previene que actue de manera predeterminada cuando uno hace un submit
		if (
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test( // Expresion regular para validar el email
				email
			) &&
			password
		) {
			localStorage.setItem( // Guardo el email y el password en el localStorage
				'login',
				JSON.stringify({ email, password }) // Para guardar el email y el password en un string
			);
			setOpen(false); // Cierro el modal del login
			setIsLogged(true); // Seteo el valor del isLogged en true
			alert('Ingreso exitoso'); 
		}
	};

	return (
		<loginContext.Provider // Creo el contexto del login
			value={{ // Seteo los valores del contexto
				email, // Email
				password, // Guardo el password
				setEmail, // Seteo el valor del email
				setPassword, // Seteo el valor del password
				handleLogin, // Agrego la funcion handleLogin al contexto
				open, // Abre el modal del login
				setOpen, // Seteo el valor del open
				isLogged, // Seteo el valor del isLogged
				setIsLogged // Seteo el valor del isLogged
			}}
		>
			{children} {/* Renderizo el componente*/}
		</loginContext.Provider> // Creo el contexto del login
	);
};

export default LoginContext;
