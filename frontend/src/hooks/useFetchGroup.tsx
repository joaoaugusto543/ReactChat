import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getGroupThunk } from '../slices/groupSlice'

type Props = {
    id:string | undefined
}

function useFetchGroup({id}: Props) {

  const {token} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    if(id && token){
        dispatch(getGroupThunk({token,id}))
    }
  },[id])
}

export default useFetchGroup