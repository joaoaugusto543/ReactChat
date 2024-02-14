import { ErrorsRegisterInterface } from "../interfaces/ErrorsRegisterInterface"
import { useAppSelector } from "../store"

function useFetchErrorsRegister() {
    const {error} = useAppSelector(state => state.user)

    const errorObject:ErrorsRegisterInterface={}

    if(error === 'User already exists'){
        errorObject.errorUserExists='Usuário já registrado'
    }

    if(!Array.isArray(error)){
        return errorObject
    }

    if(error.includes('Very long/small name')){
        errorObject.errorName='Nome muito curto ou longo'
    }

    if(error.includes('Invalid email')){
        errorObject.errorEmail='E-mail inválido'
    }

    if(error.includes('Password too small')){
        errorObject.errorPassword='Senha muito pequena'
    }

    if(error.includes('Passwords must be the same')){
        errorObject.errorConfirmPassword='As senhas precisam ser iguais'
    }

    return errorObject
}

export default useFetchErrorsRegister
