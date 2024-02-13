import { useAppDispatch, useAppSelector } from '../store'
import { MessageInterface } from '../interfaces/MessageInterface'
import { createMessageThunk } from '../slices/messageSlice'

function useCreateMessage() {

  const {token}=useAppSelector(state => state.auth)
  const dispatch=useAppDispatch()

  function createMessage(message:MessageInterface){
        if(token){
            dispatch(createMessageThunk({message,token}))
            return
        }

        return
  }

  return createMessage
}

export default useCreateMessage
