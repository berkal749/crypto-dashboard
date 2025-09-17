"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  weightyOne: "kg",
  weightOneQty: 0,
  weightTwo: "lb",
  weightCurrency: 1,
};

const weightSlice = createSlice({
    name: "weight", // Changed from "math" to "weight"
    initialState,
    reducers: {
        setFirstWeight: (state, action) => {
            state.weightyOne = action.payload;
            console.log("www first"+state.weightyOne)
        },
        setSecondWeight: (state, action) => {
            state.weightTwo = action.payload;
            console.log("www second"+state.weightTwo)
        },
        setFirstWeightQty: (state, action) => {
            state.weightOneQty = action.payload;
            console.log("www third"+state.weightOneQty)
        },
        setResultWeight: (state) => {
            // Conversion rates
            const conversionRates = {
                kg: { lb: 2.20462, g: 1000, oz: 35.274 },
                lb: { kg: 0.453592, g: 453.592, oz: 16 },
                g: { kg: 0.001, lb: 0.00220462, oz: 0.035274 },
                oz: { kg: 0.0283495, lb: 0.0625, g: 28.3495 }
            };
            console.log("final okkkk")

        
            if (state.weightyOne === state.weightTwo) {
                
                state.weightCurrency = state.weightOneQty;
                console.log("final"+state.weightCurrency)
                return;
            }

            
            const rate = conversionRates[state.weightyOne]?.[state.weightTwo];
            
            if (rate !== undefined) {
                state.weightCurrency = state.weightOneQty * rate;
                
            } else {
                state.weightCurrency = 0;
                
                console.error("Invalid conversion units");
            }
        },
    }
});

export const {
  setFirstWeight,
  setSecondWeight,
  setFirstWeightQty,
  setResultWeight,
} = weightSlice.actions;
export default weightSlice.reducer;
