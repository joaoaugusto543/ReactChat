import { NavLink } from 'react-router-dom'
import { GroupInterface } from '../../interfaces/GroupInterface'
import styles from './Group.module.css'

type Props={
    group:GroupInterface
}

function Group({group}:Props) {
  return (
    <NavLink to={`group/${group.id}`} className={({isActive})=> isActive ? `${styles.group} ${styles.active}` : styles.group}>
        <img src={group.image} alt={group.name} />
        <div>
            <p className={styles.name}>{group.name}</p>
        </div>
    </NavLink>
  )
}

export default Group
