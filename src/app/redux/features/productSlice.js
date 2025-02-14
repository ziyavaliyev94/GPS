'use client';

import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  ProductData: [],
};

export const getApi = createAsyncThunk(
  'getApi',
  async () => {
    try {
      const { data } = await axios.get('https://678536e71ec630ca33a7b680.mockapi.io/product');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApi.fulfilled, (state, action) => {
      state.ProductData = action.payload; 
    });
  },
});

export default counterSlice.reducer;