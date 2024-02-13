import styles from './Groups.module.css'
import { useAppSelector } from '../../store'
import LoaderChat from '../Loaders/LoaderChat/LoaderChat'
import Group from '../Group/Group'
import Empty from '../Empty/Empty'

function Groups() {
    const {myGroups,loading}=useAppSelector(state=>state.group)

    return (
      <>
        {!loading && myGroups.length !== 0 &&
          <div className={styles.groups}>
              {myGroups && myGroups.map((group)=><Group group={group} key={group.id}/>)}
          </div>
        }
        {loading && <LoaderChat/>}
        {!loading && myGroups.length ===0 && <Empty text='Você não possui grupos...'/>}
      </>
    )
}

export default Groups
