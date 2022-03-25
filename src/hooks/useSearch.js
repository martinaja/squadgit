import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSearchWeather } from '../slices/searchSlice';

export const useSearch = () => { // Creo el hook
	const [values, setValues] = useState({ country: '', city: '' }); // Seteo los valores del formulario

	const dispatch = useDispatch(); // Traigo el dispatch para poder acceder a sus valores

	const handleSubmit = () => { // Funcion que se ejecuta al hacer submit
		if (!values) return; // Si no hay valores no hago nada
		dispatch(asyncSearchWeather(values.city)); // Dispatch para ejecutar la accion de buscar el clima
	};

	return [values, setValues, handleSubmit]; // Retorno los valores del formulario
};
