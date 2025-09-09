import type { Iprop } from "@/Interfaces";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { toast } from "react-toastify";
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  cart:Iprop[]

  
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
   Addtocard:(state,action:PayloadAction<Iprop>)=>{
  
     const item =state.cart.find((item)=> item.id ===action.payload.id)
if (item) {
item.quantity += action.payload.quantity;
toast.success("Item Ordy In Cart")

} else {
       state.cart.push(action.payload)

}

   },





   
   Increiment: (state, action: PayloadAction<number>) => {
  const item = state.cart.find((item) => item.id === action.payload)


  if(item){

   item.quantity++;
  }
  





},


 decremint: (state, action:PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);

    if (item) { // ✅ check هنا
  if (item.quantity === 1) {
    item.quantity = 1;
  } else {
    item.quantity--;
  }
}
    },




RemoveItem :(state,action)=>{
state.cart =state.cart.filter(item=>item.id !==action.payload)
},




RemoveAllCArt:(state)=>{
state.cart =state.cart=[]


toast.success("Item All Removed")
}


   }
  },
)

export const { Addtocard ,Increiment ,decremint,RemoveItem ,RemoveAllCArt} = CartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const  Cartselector =({cart }:RootState)=>cart

export default CartSlice.reducer