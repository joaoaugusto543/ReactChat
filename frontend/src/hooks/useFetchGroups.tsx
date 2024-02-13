import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getGroupsPublicThunk, getMyGroupsThunk } from '../slices/groupSlice'

function useFetchGroups() {

    const {token}=useAppSelector(state => state.auth)

    const dispatch=useAppDispatch()
  
    useEffect(()=>{
        if(token){
            dispatch(getMyGroupsThunk({token}))
            dispatch(getGroupsPublicThunk({token}))
        }   
    },[token])

    

}

export default useFetchGroups
