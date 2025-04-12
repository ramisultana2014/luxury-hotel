import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export type BookState = {
  roomID?: string;
  email: string;
  roomName?: string;
  pricePerNight?: number;
  totalNights?: number;
  guests: number;
  breakfastCost: number;
  totalPrice?: number;
  from: string;
  to: string;
};
//initialState is always object we put insidi it properties like book, user, cart ...
// for this slice we just put reservation which is object contain roomID,email,roomNAme...
type InitialState = {
  reservation: BookState;
};
const defaultState: InitialState = {
  reservation: {
    roomID: "",
    email: "",
    roomName: "",
    pricePerNight: 0,
    totalNights: 0,
    guests: 0,
    breakfastCost: 0,
    totalPrice: 0,
    from: "",
    to: "",
  },
};
const bookedSlice = createSlice({
  name: "bookedState",
  initialState: defaultState,
  reducers: {
    createReservation: (state, action: PayloadAction<BookState>) => {
      state.reservation = action.payload;
      toast("reservation added to cart");
    },
    deleteReservation: (state) => {
      state.reservation = {
        roomID: "",
        email: "",
        roomName: "",
        pricePerNight: 0,
        totalNights: 0,
        guests: 0,
        breakfastCost: 0,
        totalPrice: 0,
        from: "",
        to: "",
      };
      toast("Reservation removed from cart");
    },
  },
});
export const { createReservation, deleteReservation } = bookedSlice.actions;
export default bookedSlice.reducer;
