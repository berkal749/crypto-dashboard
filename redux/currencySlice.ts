"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currencyOne: "bitcoin",
  currencyOneQty: 0,
  currencyTwo: "ethereum",
  resultCurrency: 0,
};

const currencySlice = createSlice({
  name: "math",
  initialState,
  reducers: {
    setFirstCurrency: (state, action) => {
      state.currencyOne = action.payload;
    },
    setSecondCurenncy: (state, action) => {
      state.currencyTwo = action.payload;
    },
    setFirstCurrencyQty: (state, action) => {
      console.log("working");
      state.currencyOneQty = action.payload;
    },
    setResultCurrency: (state, action) => {
      const coins = action.payload;
      console.log("coins "+ coins);

      console.log("Looking for:", state.currencyOne, state.currencyTwo);
      if (state.currencyOne === "USD" && state.currencyTwo) {
        state.resultCurrency = state.currencyOneQty;

        if (state.currencyOne === "USD") {
          state.resultCurrency = coins.find(
            (c) => c.id === state.currencyTwo
          ).current_price;
        }

        if (state.currencyTwo === "USD") {
          state.resultCurrency = coins.find(
            (c) => c.id === state.currencyOne
          ).current_price;
        }
        const coin1 = coins.find((c) => c.id === state.currencyOne);
        const coin2 = coins.find((c) => c.id === state.currencyTwo);
        console.log("Found:", coin1?.id, coin2?.id);

        // Add error handling!
        if (coin1 && coin2) {
          state.resultCurrency =
            (coin2.current_price * state.currencyOneQty) / coin1.current_price;
          console.log("Result:", state.resultCurrency);
        } else {
          console.error("Coins not found!");
          state.resultCurrency = 0; // Default value
        }
      }
    },
  },
});

export const {
  setFirstCurrency,
  setSecondCurenncy,
  setFirstCurrencyQty,
  setResultCurrency,
} = currencySlice.actions;
export default currencySlice.reducer;
