import { createContext, useState } from 'react';

export const loginContext = createContext();

const LoginContext = ({ children }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);
	const [isLogged, setIsLogged] = useState(false);

	const handleLogin = e => {
		e.preventDefault();
		if (
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
				email
			) &&
			password
		) {
			localStorage.setItem(
				'login',
				JSON.stringify({ email, password })
			);
			setOpen(false);
			setIsLogged(true);
			alert('Ingreso exitoso');
		}
	};

	return (
		<loginContext.Provider
			value={{
				email,
				password,
				setEmail,
				setPassword,
				handleLogin,
				open,
				setOpen,
				isLogged,
				setIsLogged
			}}
		>
			{children}
		</loginContext.Provider>
	);
};

export default LoginContext;
