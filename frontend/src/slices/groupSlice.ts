import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addParticipantInPrivateGroup, addParticipantInPublicGroup, createGroup, filterGroupsPublic, filterMyGroups, getGroup, getGroupsPublic, getMyGroups } from '../services/groupServices'
import { InitialStateGroup } from '../interfaces/InitialStateGroup'
import { CreateGroupData } from '../interfaces/CreateGroupData'

const initialState:InitialStateGroup={
    myGroups:[],
    groupsPublics:[],
    group:null,
    loading:false,
    success:false,
    error:null
}

export const getGroupsPublicThunk=createAsyncThunk('group/getGroupsPublic',async (data:{token:string},thunkApi)=>{

    const {token}=data

    const res= await getGroupsPublic(token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const getMyGroupsThunk=createAsyncThunk('group/getMyGroups',async (data:{token:string},thunkApi)=>{

    const {token}=data

    const res= await getMyGroups(token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const addParticipantInPublicGroupThunk=createAsyncThunk('group/addParticipantInPublicGroup',async (data:{id:string,token:string},thunkApi)=>{

    const {id,token}=data

    const res= await addParticipantInPublicGroup(id,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const addParticipantInPrivateGroupThunk=createAsyncThunk('group/addParticipantInPrivateGroup',async (data:{id:string,idUser:string,token:string},thunkApi)=>{

    const {id,idUser,token}=data

    const res= await addParticipantInPrivateGroup(id,idUser,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const filterGroupsPublicThunk=createAsyncThunk('group/filterGroupsPublic',async (data:{search:string,token:string},thunkApi)=>{

    const {search,token}=data

    const res= await filterGroupsPublic(token,search)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const filterMyGroupsThunk=createAsyncThunk('group/filterMyGroups',async (data:{search:string,token:string},thunkApi)=>{

    const {search,token}=data

    const res= await filterMyGroups(token,search)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const getGroupThunk=createAsyncThunk('group/getGroup',async (data:{id:string,token:string},thunkApi)=>{

    const {id,token}=data

    const res= await getGroup(token,id)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})

export const createGroupThunk=createAsyncThunk('group/createGroup',async (data:{group:CreateGroupData,token:string},thunkApi)=>{

    const {group,token}=data

    const res= await createGroup(group,token)

    if(res.error){
        return thunkApi.rejectWithValue(res.error)
    }

    return res

})


const groupSlice=createSlice({
    name:'group',
    initialState,
    reducers:{
        resetErrors:function(state){
            state.error=null
        }
    },
    extraReducers:function(build){
        build
        .addCase(getGroupsPublicThunk.fulfilled,(state,action)=>{
            state.groupsPublics=action.payload
            state.error=null
            state.loading=false
        })
        .addCase(getGroupsPublicThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(getGroupsPublicThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(getMyGroupsThunk.fulfilled,(state,action)=>{
            state.myGroups=action.payload
            state.error=null
            state.loading=false
        })
        .addCase(getMyGroupsThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(getMyGroupsThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(addParticipantInPublicGroupThunk.fulfilled,(state,action)=>{
            if(state.myGroups && state.groupsPublics){
                state.myGroups=[action.payload,...state.myGroups]
                state.groupsPublics=state.groupsPublics.filter((group)=>group.id !== action.payload.id)
            }
            state.error=null
            state.loading=false
        })
        .addCase(addParticipantInPublicGroupThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(addParticipantInPublicGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(filterGroupsPublicThunk.fulfilled,(state,action)=>{
            state.groupsPublics=action.payload
            state.error=null
            state.loading=false
        })
        .addCase(filterGroupsPublicThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(filterGroupsPublicThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(filterMyGroupsThunk.fulfilled,(state,action)=>{
            state.myGroups=action.payload
            state.error=null
            state.loading=false
        })
        .addCase(filterMyGroupsThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(filterMyGroupsThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(getGroupThunk.fulfilled,(state,action)=>{
            state.group=action.payload
            state.error=null
            state.loading=false
        })
        .addCase(getGroupThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(getGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
        .addCase(createGroupThunk.fulfilled,(state,action)=>{
            state.myGroups=[action.payload,...state.myGroups]
            state.error=null
            state.loading=false
            state.success=true
        })
        .addCase(createGroupThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(createGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
            state.success=false
        })
        .addCase(addParticipantInPrivateGroupThunk.fulfilled,(state,action)=>{
            if(state.myGroups && state.groupsPublics){
                state.myGroups=[action.payload,...state.myGroups]
            }
            state.error=null
            state.loading=false
        })
        .addCase(addParticipantInPrivateGroupThunk.pending,(state)=>{
            state.error=null
            state.loading=true
        })
        .addCase(addParticipantInPrivateGroupThunk.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false
        })
    }
})

export const {resetErrors}=groupSlice.actions
export default groupSlice.reducer