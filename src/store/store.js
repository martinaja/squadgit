import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '../slices/searchSlice';

const store = configureStore({
	reducer: {
		searchSlice
	}
});

export default store;
