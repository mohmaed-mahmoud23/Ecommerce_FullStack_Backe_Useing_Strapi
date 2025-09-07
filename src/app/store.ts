import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from "./Fetcher/LoginSlice"
import  CartSlice  from './Fetcher/Cart'
import CartSliceDrower  from './Fetcher/GlopalSlice'
export const store = configureStore({
  reducer: {
    Logdin:LoginSlice,
    cart:CartSlice,
    CartCartSliceDrower:CartSliceDrower
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch