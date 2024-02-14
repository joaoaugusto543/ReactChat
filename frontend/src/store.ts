import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import authReducer from './slices/authSlice'
import groupReducer from './slices/groupSlice'
import messageReducer from './slices/messageSlice'
import messageGroupReducer from './slices/messageGroup'
import notificationReducer from './slices/notificationSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store=configureStore({
    reducer:{
        user:userReducer,
        auth:authReducer,
        group:groupReducer,
        message:messageReducer,
        messageGroup:messageGroupReducer,
        notification:notificationReducer
    }
})

export const useAppDispatch: ()=> typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

export default store