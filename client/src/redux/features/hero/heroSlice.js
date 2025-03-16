import { createSlice } from "@reduxjs/toolkit";

export const heroSlice = createSlice({
    name: "heroIntro",
    initialState: {
        value: false, // Represents whether the intro animation is complete
    },
    reducers: {
        introComplete: (state) => {
            state.value = true; // Set state to true when animation is done
        },
        resetIntro: (state) => {
            state.value = false; // Optional reset if needed
        },
    },
});

export const { introComplete, resetIntro } = heroSlice.actions;
export default heroSlice.reducer;
