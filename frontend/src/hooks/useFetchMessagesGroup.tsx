import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getMessageGroupThunk } from '../slices/messageGroup'

type Props={
    id:string | undefined
}

function useFetchMessagesGroup({id}:Props) {

  const dispatch=useAppDispatch()
  const {token}=useAppSelector(state => state.auth)

  useEffect(()=>{
    if(token && id){
        dispatch(getMessageGroupThunk({token,id:parseInt(id)}))
    }
  },[token,id])
  
}

export default useFetchMessagesGroup
