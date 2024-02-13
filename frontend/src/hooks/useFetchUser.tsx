import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getUserThunk } from '../slices/userSlice'


function useFetchUser() {

  const {user,loading}=useAppSelector(state => state.user)
  const dispatch=useAppDispatch()
  const {token}=useAppSelector(state => state.auth)

  useEffect(()=>{
    if(token){
        dispatch(getUserThunk({token}))
    }
  },[token])

  return {user,loading}

}

export default useFetchUser
