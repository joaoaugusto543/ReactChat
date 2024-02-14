import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Empty from '../Empty/Empty'
import GroupPublic from '../GroupPublic/GroupPublic'
import LoaderAdd from '../Loaders/LoaderAdd/LoaderAdd'
import styles from './GroupsPublics.module.css'

function GroupsPublics() {

   const {groupsPublics,loading}=useAppSelector(state => state.group)

  return (
    <div className={styles.addGroup}>

      {!loading && 
            <div className={styles.createGroup}>
              <Link to='/createGroup'>Criar grupo</Link>
            </div>
      }

      {loading && <LoaderAdd/> }

      { groupsPublics.length !==0 && groupsPublics.map((group)=><GroupPublic key={group.id} group={group}/>)}

      {!loading && groupsPublics.length === 0  && <Empty text='Grupos não encontrados...'/>}
      
    </div>
  )
}

export default GroupsPublics
