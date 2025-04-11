import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../features/stores/darkMode/darkModeSlice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice,
    },
})
