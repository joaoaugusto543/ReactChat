import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { InitialStateNotification } from '../interfaces/InitialStateNotification'
import { CreateNotificationData } from '../interfaces/CreateNotificationData'
import { createNotification, getNotifications, updateView } from '../services/notificationServices'

const initialState:InitialStateNotification={
    notifications:[],
    loading:false,
    error:null
}

export const createNotificationThunk=createAsyncThunk('notification/createNotification',async (data:{notification:CreateNotificationData,token:string},thunkApi)=>{
    
    const {notification,token}=data

    const res= await createNotification(notification,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const getNotificationsThunk=createAsyncThunk('notification/getNotifications',async (data:{token:string},thunkApi)=>{
    
    const {token}=data

    const res= await getNotifications(token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const updateViewThunk=createAsyncThunk('notification/updateView',async (data:{id:string,token:string},thunkApi)=>{
    
    const {id,token}=data

    const res= await updateView(id,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})


const notificationSlice=createSlice({
    name:'notification',
    initialState,
    reducers:{},
    extraReducers: function(build){
        build
        .addCase(createNotificationThunk.fulfilled,(state)=>{
            state.loading=false
            state.error=null
        })
        .addCase(createNotificationThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(createNotificationThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
        .addCase(getNotificationsThunk.fulfilled,(state,action)=>{
            state.notifications=action.payload
            state.loading=false
            state.error=null
        })
        .addCase(getNotificationsThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getNotificationsThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
        .addCase(updateViewThunk.fulfilled,(state,action)=>{
            state.notifications=state.notifications.filter((notification)=>notification.id !== parseInt(action.payload.id))
            state.loading=false
            state.error=null
        })
        .addCase(updateViewThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(updateViewThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })

    }
})

export const {}=notificationSlice.actions
export default notificationSlice.reducer