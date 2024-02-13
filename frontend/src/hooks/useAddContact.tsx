import { useAppDispatch, useAppSelector } from '../store'
import { addContactThunk } from '../slices/userSlice'

type Props={
    code:string,
}

function useAddContact({code}:Props) {

  const dispatch=useAppDispatch()

  const {token}=useAppSelector(state => state.auth)

  function handleAddContact(){

    if(token){
        dispatch(addContactThunk({token,code}))
    }

  }

  return handleAddContact
}

export default useAddContact
