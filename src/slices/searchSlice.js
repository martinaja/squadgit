import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentWeather } from '../services/currentWeatherServices';
import { getGeoCodes } from '../services/geoCodeApiServices';

const initialState = { // Declaro el estado inicial
	data: undefined, 
	status: 'idle',
	errorMsg: '',
	loader: false 
};

const searchSlice = createSlice({  // Creo el slice de la busqueda
	name: 'search', //
	initialState, // Seteo el estado inicial
	extraReducers: builder => { // Seteo los reducers
		builder 
			.addCase(asyncSearchWeather.pending, state => { // Seteo el estado de la busqueda que maneja el estado mientras la peticion esta pendiente
				state.status = 'pending';
				state.loader = true;
			})
			.addCase(asyncSearchWeather.fulfilled, (state, action) => { // Seteo el estado de la busqueda que maneja el estado cuando la peticion se completo
				state.data = action.payload;
				state.status = 'success';
				state.loader = false;
			})
			.addCase(asyncSearchWeather.rejected, (state, action) => { // Seteo el estado de la busqueda que maneja el estado cuando la peticion se rechazo
				state.errorMsg = action.payload;
				state.status = 'error';
				state.loader = false;
			});
	}
});

export const asyncSearchWeather = createAsyncThunk( // Creo la accion de buscar el clima
	'weather/search',
	async city => {
		try {
			const responseGeo = await getGeoCodes(city); // Traigo los datos de la api de geocode
			if (responseGeo.data.length === 0) { // Si no hay datos no hago nada
				throw new Error('No se encontraron resultados'); // Lanzo un error
			} else {
				const responseWeather = await getCurrentWeather( // Traigo los datos de la api de clima actual
					responseGeo.data[0].lat, // Seteo los valores de latitud 
					responseGeo.data[0].lon // Seteo los valores de longitud
				);
				return responseWeather?.data; // Retorno los datos de la api de clima actual
			}
		} catch (err) {
			throw new Error(err); // Lanzo un error
		}
	}
);

export default searchSlice.reducer;
