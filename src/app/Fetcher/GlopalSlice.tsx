import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  onopenCardDeower: boolean;
  isopenCardDeower: boolean;
  iscloseCardDeower: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  iscloseCardDeower: false,
  isopenCardDeower: false,
  onopenCardDeower: false,
};

export const CartSliceDrower = createSlice({
  name: "CartCartSliceDrower",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    isopenCardDeowerAction: (state) => {
      state.isopenCardDeower = !state.isopenCardDeower;
    },
    onopenCardDeowerAction: (state) => {
      state.onopenCardDeower = true;

      state.iscloseCardDeower = true;
    },
    onocloseCardDeowerAction: (state) => {
      state.iscloseCardDeower = false;

      state.isopenCardDeower = false;
    },
  },
});

export const {
  isopenCardDeowerAction,
  onopenCardDeowerAction,
  onocloseCardDeowerAction,
} = CartSliceDrower.actions;

// Other code such as selectors can use the imported `RootState` type
export const CartselectorDrower = ({ CartCartSliceDrower }: RootState) =>
  CartCartSliceDrower;

export default CartSliceDrower.reducer;
