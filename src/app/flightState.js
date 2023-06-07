import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { options } from './constants';
import axios from 'axios';

export const getFlightData = createAsyncThunk(
  'flights/getFlights',
  async () => {
    // asenkron işlemler
    const res = await axios.request(options);

    // bize gelen dizileri alıp objeye çevirdik
    const newData = res.data.aircraft.map((plane) => ({
      id: plane[0],
      code: plane[1],
      lat: plane[2],
      lng: plane[3],
    }));

    // store' aktarm istediğimiz veriyi return etr
    return newData;
  }
);

const initialState = {
  flights: [],
  flightsLoading: true,
  isError: false,
};

export const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  extraReducers: {
    // pending : apiden cevap beklerken
    [getFlightData.pending]: (state, action) => {
      state.flightsLoading = true;
    },
    // fulfilled : eğer veri gelirse
    [getFlightData.fulfilled]: (state, action) => {
      state.flights = action.payload;
      state.flightsLoading = false;
    },
    // rejected : api cevap vermezse
    [getFlightData.rejected]: (state, action) => {
      state.flightsLoading = false;
      state.isError = true;
    },
  },
});

// eğer thunk kullanıcaksa reducer yerine extraReducers
