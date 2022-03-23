import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../services/currentWeatherServices';
import { getGeoCodes } from '../services/geoCodeApiServices';

const initialState = {
	data: undefined,
	status: 'idle',
	errorMsg: '',
	loader: false
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(asyncSearchWeather.pending, state => {
				state.status = 'pending';
				state.loader = true;
			})
			.addCase(asyncSearchWeather.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'success';
				state.loader = false;
			})
			.addCase(asyncSearchWeather.rejected, (state, action) => {
				state.errorMsg = action.payload;
				state.status = 'error';
				state.loader = false;
			});
	}
});

export const asyncSearchWeather = createAsyncThunk(
	'weather/search',
	async city => {
		try {
			const responseGeo = await getGeoCodes(city);
			if (responseGeo.data.length === 0) {
				throw new Error('No se encontraron resultados');
			} else {
				const responseWeather = await getCurrentWeather(
					responseGeo.data[0].lat,
					responseGeo.data[0].lon
				);
				return responseWeather?.data;
			}
		} catch (err) {
			throw new Error(err);
		}
	}
);

export default searchSlice.reducer;
