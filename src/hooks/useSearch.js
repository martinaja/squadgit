import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSearchWeather } from '../slices/searchSlice';

export const useSearch = () => {
	const [values, setValues] = useState({ country: '', city: '' });

	const dispatch = useDispatch();

	const handleSubmit = () => {
		if (!values) return;
		dispatch(asyncSearchWeather(values.city));
	};

	return [values, setValues, handleSubmit];
};
