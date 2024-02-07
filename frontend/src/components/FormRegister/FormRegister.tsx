import { useEffect, useState } from 'react'
import styles from './FormRegister.module.css'
import useHandleFile from '../../hooks/useHandleFile'
import { useAppDispatch, useAppSelector } from '../../store'
import { createUserThunk } from '../../slices/userSlice'
import { loginThunk } from '../../slices/authSlice'

function FormRegister() {

    const [name,setName]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [confirmPassword,setConfirmePassword]=useState<string>('')
    const [profileImage,setProfileImage]=useState<File | null>(null)

    const handleFile=useHandleFile({setProfileImage})

    const dispatch=useAppDispatch()

    const {loading,success}=useAppSelector(state => state.user)

    useEffect(()=>{
        if(success){
            dispatch(loginThunk({email,password}))
        }
    },[success])

    function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()

        if(loading){
            return
        }

        const user={
            name,
            email,
            password,
            confirmPassword,
            profileImage
        }

        dispatch(createUserThunk(user))
    }

  return (
    <>
        {profileImage && <img className={styles.previewImage} src={URL.createObjectURL(profileImage)} alt={profileImage.name}/>}
        <form className={styles.formRegister} onSubmit={handleSubmit}>
            {!profileImage ?
                <label id={styles.file}>
                    <span>Adicione uma foto (opcional)</span>
                    <input type='file' value={''} onChange={handleFile}/>
                    <img src='https://res.cloudinary.com/dezsbjgjj/image/upload/v1706144110/p6uv3s57jyfatagksntg.png' alt='anônimo' />
                </label>
                :
                <label id={styles.updateFile}>
                    <span>Altere a foto</span>
                    <input type='file' value={profileImage.webkitRelativePath} onChange={handleFile}/>
                </label>
            }
            <label>
                <span>Nome:</span>
                <input type='text' max={32} placeholder='Digite seu nome' onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
                <span>E-mail</span>
                <input type='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)} />
            </label>
            <label>
                <span>Senha:</span>
                <input type='password' placeholder='Digite sua senha' onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <label>
                <span>Confirmar senha</span>
                <input type='password' placeholder='Digite sua senha novamente' onChange={(e)=>setConfirmePassword(e.target.value)} />
            </label>
            {!loading ? <input type='submit' value='Criar' /> : <input type='submit' value='Aguarde...' /> }
        </form>
    </>
  )
}

export default FormRegister
