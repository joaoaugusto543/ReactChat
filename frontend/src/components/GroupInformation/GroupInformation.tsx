import { IoMdCloseCircle } from 'react-icons/io'
import { useAppSelector } from '../../store'
import styles from './GroupInformation.module.css'

type Props={
  setShowInformation:Function
}

function GroupInformation({setShowInformation}:Props) {

  const {group} = useAppSelector(state => state.group)
  
  return (
    <section className={styles.groupInformation}>
        <button className={styles.close} onClick={()=>setShowInformation(false)}><IoMdCloseCircle /></button>
        <div className={styles.box}>
            <h1>Descrição</h1>
            <p>{group?.description}</p>
        </div>
    </section>
  )
}

export default GroupInformation
