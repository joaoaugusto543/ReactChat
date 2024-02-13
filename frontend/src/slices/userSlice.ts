import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {addContact, createUser, filterContacts, getContact, getUserByCode, profile} from '../services/userServices'
import { InitialStateUser } from '../interfaces/InitialStateUser'
import { CreateUserData } from '../interfaces/CreateUserData'

const initialState:InitialStateUser={
    user:null,
    userCode:null,
    loading:false,
    contact:null,
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

export const getUserByCodeThunk=createAsyncThunk('user/getUserByCode',async (data:{code:string,token:string},thunkApi)=>{

    const {code,token}=data

    const res= await getUserByCode(code,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const getUserThunk=createAsyncThunk('user/getUser',async (data:{token:string},thunkApi)=>{

    const {token}=data

    const res= await profile(token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const addContactThunk=createAsyncThunk('user/addContact',async (data:{code:string,token:string},thunkApi)=>{

    const {code,token}=data

    const res= await addContact(token,code)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const filterContactsThunk=createAsyncThunk('user/filter',async (data:{search:string,token:string})=>{

    const {search,token}=data

    const res=await filterContacts(token,search)

    return res

})

export const getContactThunk=createAsyncThunk('user/getContact',async (data:{id:string,token:string},thunkApi)=>{

    const {token,id}=data

    const res=await getContact(token,id)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        resetUserCode:function(state){
            state.userCode=null
        },
        resetError:function (state){
            state.error=null
        },
        resetSuccess:function(state){
            state.success=false
        }
    },
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
        .addCase(getUserByCodeThunk.fulfilled,(state,action)=>{
            state.userCode=action.payload
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(getUserByCodeThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getUserByCodeThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
        .addCase(getUserThunk.fulfilled,(state,action)=>{
            state.user=action.payload
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(getUserThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getUserThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
        .addCase(addContactThunk.fulfilled,(state,action)=>{
            if(state.user){
                state.user.contacts = [action.payload,...state.user.contacts]
            }
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(addContactThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(addContactThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
        .addCase(filterContactsThunk.fulfilled,(state,action)=>{
            if(state.user){
                state.user.contacts=action.payload
            }
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(filterContactsThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getContactThunk.fulfilled,(state,action)=>{
            state.contact=action.payload
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(getContactThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getContactThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
    }

})

export const {resetUserCode,resetError,resetSuccess} = userSlice.actions
export default userSlice.reducer