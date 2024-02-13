import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createMessageGroup, getMessagesGroup } from '../services/messagesGroup'
import { MessageGroupInterface } from '../interfaces/MessageGroupInterface'
import { initialStateMessageGroup } from '../interfaces/initialStateMessageGroup'

const initialState:initialStateMessageGroup={
    messages:[],
    loading:false,
    error:null
}

export const createMessageGroupThunk=createAsyncThunk('messageGroup/createMessageGroup',async (data:{message:MessageGroupInterface,token:string},thunkApi)=>{

    const {message,token}=data

    const res= await createMessageGroup(message,token)

    console.log(res)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})


export const getMessageGroupThunk=createAsyncThunk('messageGroup/getMessageGroup',async (data:{id:number,token:string},thunkApi)=>{

    const {id,token}=data

    const res= await getMessagesGroup(token,id)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

const messageGroupSlice=createSlice({
    name:'messageGroup',
    initialState,
    reducers:{},
    extraReducers:function(build){
        build
        .addCase(createMessageGroupThunk.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(createMessageGroupThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(createMessageGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(getMessageGroupThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.messages=action.payload
        })
        .addCase(getMessageGroupThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getMessageGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})


export const {}=messageGroupSlice.actions
export default messageGroupSlice.reducer