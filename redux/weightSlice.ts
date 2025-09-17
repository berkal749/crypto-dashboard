"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  weightyOne: "kg",
  weightOneQty: 0,
  weightTwo: "lb",
  weightCurrency: 0,
};

const currencySlice = createSlice({
  name: "math",
  initialState,
  reducers: {
    setFirstWeight: (state, action) => {
      
    },
    setSecondWeight: (state, action) => {
      
    },
    setFirstWeightQty: (state, action) => {
      
    },
    setResultWeight: (state, action) => {
      
  },
}});

export const {
  setFirstWeight,
  setSecondWeight,
  setFirstWeightQty,
  setResultWeight,
} = currencySlice.actions;
export default currencySlice.reducer;
