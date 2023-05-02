import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: 'light',
    },
    reducers: {
        toggle: (state) => {
            if (state.value === "light") {
                state.value = "dark"
            } else {
                state.value = "light"
            };
        }
    }
});

export const { toggle } = themeSlice.actions
export default themeSlice.reducer