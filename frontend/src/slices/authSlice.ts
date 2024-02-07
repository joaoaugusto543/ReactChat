import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { LoginInterface } from '../interfaces/LoginInterface'
import {login} from '../services/sessionServices'
import { InitialStateAuth } from '../interfaces/InitialStateAuth'

const user: string | null = localStorage.getItem('user')
const token: string | null = localStorage.getItem('token')

const initialState:InitialStateAuth={
    user:user ? JSON.parse(user) : null,
    token:token ? token : null,
    loading:false,
    error:null
}

export const loginThunk=createAsyncThunk('auth/login',async (data:LoginInterface,thunkApi)=>{
    
    const res= await login(data)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    localStorage.setItem('user',JSON.stringify(res.user))
    localStorage.setItem('token',res.token)

    return res

})


const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: function(build){
        build
        .addCase(loginThunk.fulfilled,(state,action)=>{
            state.user=action.payload.user
            state.token=action.payload.token
            state.loading=false
            state.error=null
        })
        .addCase(loginThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(loginThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })

    }
})

export const {}=authSlice.actions
export default authSlice.reducer