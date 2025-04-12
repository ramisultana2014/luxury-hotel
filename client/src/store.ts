import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./context/bookingSlice";

export const store = configureStore({
  reducer: {
    bookedState: bookReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
