import { useAppDispatch, useAppSelector } from '../store'
import { ErrorsGroupInterface } from '../interfaces/ErrorsGroupInterface'
import { useEffect } from 'react'
import { resetErrors } from '../slices/groupSlice'

function useFetchErrorsGroup() {
  const {error} = useAppSelector(state => state.group)
  const dispatch=useAppDispatch()

  useEffect(()=>{
    if(error){
        setTimeout(()=>{
            dispatch(resetErrors())
        },3000)
    }
  },[error])

  const errorObject:ErrorsGroupInterface={}

  if(error === 'Group already exists'){
    errorObject.errorGroupExists='Esse Grupo já existe'
  }

  if(!Array.isArray(error)){
    return errorObject
  }

  if(error.includes('Very long/small name')){
    errorObject.errorName='Nome muito curto ou longo'
  }

  if(error.includes('description too small')){
    errorObject.errorDescription='Descrição muito curta'
  }

  return errorObject
}

export default useFetchErrorsGroup
