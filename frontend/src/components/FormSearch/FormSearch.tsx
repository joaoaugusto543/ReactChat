import { IoSearch } from 'react-icons/io5'
import { TabState } from '../../interfaces/InterfaceReducerNavBar'
import styles from './FormSearch.module.css'
import useHandleFormSearch from '../../hooks/useHandleFormSearch'
import { IoCloseCircle } from 'react-icons/io5'
import useHandleSearch from '../../hooks/useHandleSearch'

type Props={
    state:TabState,
    search:string,
    setSearch:Function
}

function FormSearch({state,search,setSearch}:Props) {

  const {handleFormSearch,handleClearFormSearch}=useHandleFormSearch({tab:state.tab,search,setSearch})

  const handleSerch=useHandleSearch({tab:state.tab,setSearch})

  return (
    <form className={styles.search}>
        <label>
            <span>Pesquisar:</span>
            <input 
              type='text' value={state.tab !== 'addContact' ? search : `#${search}`} 
              onChange={handleSerch} 
              placeholder={state.placeholder} />
            <button className={styles.buttonSearch} onClick={handleFormSearch}><IoSearch /></button>
            <button className={styles.buttonClear} onClick={handleClearFormSearch}><IoCloseCircle/></button>
        </label>
    </form>
  )
}

export default FormSearch
