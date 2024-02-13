import useAddGroup from '../../hooks/useAddGroup'
import { GroupInterface } from '../../interfaces/GroupInterface'
import { useAppSelector } from '../../store'
import styles from './GroupPublic.module.css'

type Props={
    group:GroupInterface
}

function GroupPublic({group}:Props) {

  const {loading} = useAppSelector(state => state.group)

  const addGroup= useAddGroup({id:group.id})

  return (
    <>
      {!loading &&
        <div className={styles.group}>
          <img src={group.image} alt={group.name} />
          <p>{group.name}</p>
          <button onClick={addGroup}>Entrar</button>
        </div>
      }
    </>
  )
}

export default GroupPublic
