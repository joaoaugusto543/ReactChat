import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getNotificationsThunk } from '../slices/notificationSlice'

function useFetchNotifications() {

  const dispatch = useAppDispatch()
  const {token} = useAppSelector(state => state.auth)

  useEffect(()=>{
    if(token){
        dispatch(getNotificationsThunk({token}))
    }
  },[token])
}

export default useFetchNotifications
