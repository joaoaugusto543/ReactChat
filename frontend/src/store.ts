import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store=configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer
    }
})

export const useAppDispatch: ()=> typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store