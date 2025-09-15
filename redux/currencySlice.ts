"use client"; 
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currencyOne: "bitcoin",
  currencyOneQty: 0,
  currencyTwo: "ethereum",
  resultCurrency: 0,
};
let coin:any[]=[];

async function fetchData() {
  try {
    // Fixed: Complete URL in one line, no extra "GET" method
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
    );

    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const data = await response.json(); // Added 'await'
    coin=data;
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

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
      state.currencyOneQty = action.payload;
    },

    setResultCurrency: (state) => {
      const coin1 = coin.find((c) => c.id === state.currencyOne);
      const coin2 = coin.find((c) => c.id === state.currencyTwo);
      state.resultCurrency =
        ((coin2.current_price as number) * state.currencyOneQty) /
        coin1.current_price;
    },
  },
});

export const { setFirstCurrency, setSecondCurenncy, setFirstCurrencyQty, setResultCurrency } = currencySlice.actions;
export default currencySlice.reducer;
