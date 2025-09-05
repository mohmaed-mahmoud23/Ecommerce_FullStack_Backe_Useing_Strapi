import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  cart:string[],

  
}

// Define the initial state using that type
const initialState: CounterState = {
  cart:[],
}

export const CartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   Addtocard:( state,action)=>{
state.cart=[...state.cart,action.payload]
   },

   }
  },
)

export const { Addtocard } = CartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const  Cartselector =({cart ,}:RootState)=>cart

export default CartSlice.reducer