
import { useAppDispatch, useAppSelector } from '../store'
import { addParticipantInPrivateGroupThunk, addParticipantInPublicGroupThunk } from '../slices/groupSlice'

type Props={
    id:string
}

function useAddGroup({id}:Props) {

    const {token}=useAppSelector(state => state.auth)
    const dispatch=useAppDispatch()

    function addGroupPublic(){

        if(!token){
            return
        }

        dispatch(addParticipantInPublicGroupThunk({id,token}))
        return
    }

    function addGroupPrivate(idUser:string){

        if(!token){
            return
        }

        dispatch(addParticipantInPrivateGroupThunk({id,idUser,token}))
        return
    }

    return {addGroupPublic,addGroupPrivate}

}

export default useAddGroup
