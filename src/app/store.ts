import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from "./Fetcher/LoginSlice"
import  CartSlice  from './Fetcher/Cart'
import CartSliceDrower  from './Fetcher/GlopalSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistCartConfig = {
  key: 'cart',
  storage,
}

const PersistedCart=persistReducer(persistCartConfig,CartSlice)
export const store = configureStore({
  reducer: {
    Logdin:LoginSlice,
    cart:PersistedCart,
    CartCartSliceDrower:CartSliceDrower
    
  },
})

export const persister =persistStore(store)



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch