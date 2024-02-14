import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GroupInterface } from '../interfaces/GroupInterface'
import { useAppDispatch, useAppSelector } from '../store'
import { resetErrors } from '../slices/groupSlice'

type Props={
    group:GroupInterface | null,
    id:string | undefined
}

function useVerifyGroup({group,id}:Props) {

    const navigate=useNavigate()

    const {error} = useAppSelector(state => state.group)
    const dispatch = useAppDispatch()

    function verifyGroup(){

        if(error === 'Unauthorized' || error=== 'Group not found'){
            navigate('/')
            dispatch(resetErrors())
            return
        }

        if(!group || !id){
            return
        }

        const participant=group.participants.find((participant)=>participant === String(id))

        if(!participant){
            navigate('/')
            return
        }

        return

    }

    useEffect(()=>{
        verifyGroup()
    },[group,id,error])
}

export default useVerifyGroup