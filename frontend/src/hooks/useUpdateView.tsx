import { updateViewThunk } from '../slices/notificationSlice'
import { useAppDispatch, useAppSelector } from '../store'

type Props = {
    id:string
}

function useUpdateView({id}: Props) {

    const dispatch = useAppDispatch()
    const {token} = useAppSelector(state => state.auth)

    function updateView(){
        if(token){
            dispatch(updateViewThunk({id,token}))
        }
    }

    return updateView
}

export default useUpdateView