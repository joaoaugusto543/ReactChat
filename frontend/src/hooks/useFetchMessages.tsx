import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getMessageThunk } from '../slices/messageSlice'

type Props={
    id:string | undefined
}

function useFetchMessages({id}:Props) {

  const dispatch=useAppDispatch()
  const {token}=useAppSelector(state => state.auth)

  useEffect(()=>{
    if(token && id){
        dispatch(getMessageThunk({token,id:parseInt(id)}))
    }
  },[token,id])
  
}

export default useFetchMessages
