import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {createUser} from '../services/userServices'
import { InitialStateUser } from '../interfaces/InitialStateUser'
import { CreateUserData } from '../interfaces/CreateUserData'

const initialState:InitialStateUser={
    user:null,
    users:null,
    loading:false,
    error:null,
    success:false,
}

export const createUserThunk=createAsyncThunk('user/create',async (data:CreateUserData,thunkApi)=>{

    const res= await createUser(data)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:function(build){
        build
        .addCase(createUserThunk.fulfilled,(state,action)=>{
            state.user=action.payload
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(createUserThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(createUserThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
    }

})

export const {} = userSlice.actions
export default userSlice.reducer