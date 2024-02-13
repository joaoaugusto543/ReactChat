import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createMessages, getMessages } from '../services/messagesServices'
import { MessageInterface } from '../interfaces/MessageInterface'
import { InitialStateMessages } from '../interfaces/initialStateMessages'

const initialState:InitialStateMessages={
    messages:[],
    loading:false,
    error:null
}

export const createMessageThunk=createAsyncThunk('message/createMessage',async (data:{message:MessageInterface,token:string},thunkApi)=>{

    const {message,token}=data

    const res= await createMessages(message,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})


export const getMessageThunk=createAsyncThunk('message/getMessage',async (data:{id:number,token:string},thunkApi)=>{

    const {id,token}=data

    const res= await getMessages(token,id)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

const messageSlice=createSlice({
    name:'message',
    initialState,
    reducers:{},
    extraReducers:function(build){
        build
        .addCase(createMessageThunk.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(createMessageThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(createMessageThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(getMessageThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.messages=action.payload
        })
        .addCase(getMessageThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getMessageThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})


export const {}=messageSlice.actions
export default messageSlice.reducer