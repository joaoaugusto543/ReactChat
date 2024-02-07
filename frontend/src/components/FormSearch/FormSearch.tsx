import { IoSearch } from 'react-icons/io5'
import { TabState } from '../../interfaces/InterfaceReducerNavBar'
import styles from './FormSearch.module.css'

type Props={
    state:TabState
}

function FormSearch({state}:Props) {
  return (
    <form className={styles.search}>
        <label>
            <span>Pesquisar:</span>
            <input type='text' placeholder={state.placeholder} />
            <button><IoSearch /></button>
        </label>
    </form>
  )
}

export default FormSearch
