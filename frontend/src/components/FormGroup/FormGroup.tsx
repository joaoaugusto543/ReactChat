import { useState } from 'react'
import styles from './FormGroup.module.css'
import useHandleFile from '../../hooks/useHandleFile'

function FormGroup() {

  const [image,setImage]=useState<File | null>(null)

  const handleFile=useHandleFile({set:setImage})

  return (
    <>  
        {image && <img className={styles.previewImage} src={URL.createObjectURL(image)} alt={image.name}/>}
        <form className={styles.formGroup}>
            {!image ?
                <label id={styles.file}>
                    <span>Adicione uma foto (opcional)</span>
                    <input type='file' value={''} onChange={handleFile}/>
                    <img src='https://res.cloudinary.com/dezsbjgjj/image/upload/v1707491458/d0ri83x3bu2693kyjicw.png' alt='anônimo' />
                </label>
                :
                <label id={styles.updateFile}>
                    <span>Altere a foto</span>
                    <input type='file' value={image.webkitRelativePath} onChange={handleFile}/>
                </label>
            }
            <label>
                <span>Nome:</span>
                <input type='text' placeholder='Digite o nome do grupo' />
            </label>
            <label>
                <span>Descrição:</span>
                <input type='text' placeholder='Digite a descrição do grupo' />
            </label>
            <label>
                <span>Privacidade:</span>
                <select>
                    <option value='public'>Público</option>
                    <option value='private'>Privado</option>
                </select>
            </label>
        </form>
    </>
  )
}

export default FormGroup
