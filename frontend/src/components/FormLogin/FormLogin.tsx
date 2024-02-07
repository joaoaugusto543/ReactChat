import React, { useState } from 'react'
import styles from './FormLogin.module.css'
import { useAppDispatch, useAppSelector } from '../../store'
import { loginThunk } from '../../slices/authSlice'

function FormLogin() {

  const [email,setEmail]=useState<string>('')
  const [password,setPassword]=useState<string>('')

  const dispatch=useAppDispatch()

  const {loading}=useAppSelector(state=>state.auth)

  function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
    e.preventDefault()

    if(loading){
      return
    }

    const loginData={
      email,
      password
    }

    dispatch(loginThunk(loginData))
  }

  return (
    <form className={styles.formLogin} onSubmit={handleSubmit}>
        <label>
            <span>E-mail</span>
            <input type='email' placeholder='Digite seu e-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
            <span>Senha</span>
            <input type='password' placeholder='Digite sua senha' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </label>
        {!loading ? <input type='submit' value='Entrar' /> : <input type='submit' disabled value='Aguarde...' />}
    </form>
  )
}

export default FormLogin
