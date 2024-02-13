import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { getContactThunk } from '../slices/userSlice'

type Props ={
    id:string | undefined
}

function useFetchContact({id}:Props) {

    const {token}=useAppSelector(state => state.auth)
    const dispatch= useAppDispatch()

    useEffect(()=>{
        if(token && id){
            dispatch(getContactThunk({token,id}))
        }
    },[id,token])
}

export default useFetchContact
