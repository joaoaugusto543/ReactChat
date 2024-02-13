
import { useAppDispatch, useAppSelector } from '../store'
import { addParticipantInPublicGroupThunk } from '../slices/groupSlice'

type Props={
    id:string
}

function useAddGroup({id}:Props) {

    const {token}=useAppSelector(state => state.auth)
    const dispatch=useAppDispatch()

    function addGroup(){

        if(!token){
            return
        }

        dispatch(addParticipantInPublicGroupThunk({id,token}))
        return
    }

    return addGroup

}

export default useAddGroup
