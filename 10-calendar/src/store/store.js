import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice } from "./";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer
    },
    //* No revise si las fechas se pueden serializar
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})