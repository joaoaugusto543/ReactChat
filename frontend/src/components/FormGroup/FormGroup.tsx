import React, { useEffect, useState } from 'react'
import styles from './FormGroup.module.css'
import useHandleFile from '../../hooks/useHandleFile'
import useHandlePrivacy from '../../hooks/useHandlePrivacy'
import { useAppDispatch, useAppSelector } from '../../store'
import { createGroupThunk } from '../../slices/groupSlice'
import { CreateGroupData } from '../../interfaces/CreateGroupData'
import useFetchErrorsGroup from '../../hooks/useFetchErrorsGroup'

function FormGroup() {

  const [image,setImage]=useState<File | null>(null)
  const [name,setName] = useState<string>('')
  const [description,setDescription]=useState<string>('')
  const [publicGroup,setPublicGroup]=useState<boolean>(true)
  const [messageSuccess,setMessageSuccess]=useState<string>('')

  const handleFile=useHandleFile({set:setImage})

  const handlePrivacy=useHandlePrivacy({setPublicGroup})

  const {token} = useAppSelector(state => state.auth)

  const {loading,success} = useAppSelector(state => state.group)

  const dispatch=useAppDispatch()

  const {errorDescription,errorName,errorGroupExists}=useFetchErrorsGroup()

  useEffect(()=>{
    if(success){
        setImage(null)
        setName('')
        setDescription('')
        setPublicGroup(true)
        setMessageSuccess('Grupo criado!')
        setTimeout(()=>{
            setMessageSuccess('')
        },3000)
    }
  },[success])

  function handleSubmit(e:React.BaseSyntheticEvent){

    e.preventDefault()

    if(!token || loading){
        return
    }

    const newGroup:CreateGroupData={
        name,
        description,
        publicGroup
    }

    if(image){
        newGroup.image=image
    }

    dispatch(createGroupThunk({group:newGroup,token}))
    
  }

  return (
    <>  
        {errorGroupExists && <p className={`${styles.error} ${styles.unique}`}>{errorGroupExists}</p>}
        {messageSuccess &&  <p className={styles.success}>{messageSuccess}</p>}
        {image && <img className={styles.previewImage} src={URL.createObjectURL(image)} alt={image.name}/>}
        <form className={styles.formGroup} onSubmit={handleSubmit}>
            {!image ?
                <label id={styles.file}>
                    <span>Adicione uma foto (opcional)</span>
                    <input type='file' value='' onChange={handleFile} accept='.png , .jpeg , .jpg'/>
                    <img src='https://res.cloudinary.com/dezsbjgjj/image/upload/v1707491458/d0ri83x3bu2693kyjicw.png' alt='anônimo' />
                </label>
                :
                <label id={styles.updateFile}>
                    <span>Altere a foto</span>
                    <input type='file' value={image.webkitRelativePath} onChange={handleFile} accept='.png , .jpeg , .jpg'/>
                </label>
            }
            <label>
                <span>Nome:</span>
                <input type='text' placeholder='Digite o nome do grupo' value={name} onChange={(e)=>setName(e.target.value)}/>
                {errorName && <p className={styles.error}>{errorName}</p>}
            </label>
            <label>
                <span>Privacidade:</span>
                <select onChange={handlePrivacy} value={publicGroup ? 'public' : 'private'}>
                    <option value='public'>Público</option>
                    <option value='private'>Privado</option>
                </select>
            </label>
            <label className={styles.description}>
                <span>Descrição:</span>
                <textarea placeholder='Digite a descrição do grupo' value={description} onChange={(e)=>setDescription(e.target.value)} />
                {errorDescription && <p className={styles.error}>{errorDescription}</p>}
            </label>
            {!loading ? <input type='submit' value='Criar' /> : <input type='submit' disabled value='Aguarde...' />}
        </form>
    </>
  )
}

export default FormGroup
