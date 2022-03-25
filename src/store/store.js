import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../slices/searchSlice';

const store = configureStore({ // Configuro el store
	reducer: { // Agrego los reducers
		searchSlice // Seteo el slice de la busqueda
	}
});

export default store;
