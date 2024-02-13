import { useAppDispatch, useAppSelector } from '../store'
import { createMessageGroupThunk } from '../slices/messageGroup'
import { MessageGroupInterface } from '../interfaces/MessageGroupInterface'

function useCreateMessageGroup() {

  const {token}=useAppSelector(state => state.auth)
  const dispatch=useAppDispatch()

  function createMessage(message:MessageGroupInterface){
        if(token){
            dispatch(createMessageGroupThunk({message,token}))
            return
        }

        return
  }

  return createMessage
}

export default useCreateMessageGroup
