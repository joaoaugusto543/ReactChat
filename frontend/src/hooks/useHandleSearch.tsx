import React from 'react'

type Props = {
    setSearch:Function,
    tab:string
}

function useHandleSearch({setSearch,tab}: Props) {
  
    function handleSearch(e:React.BaseSyntheticEvent){

        const value=e.target.value

        if(!value.includes('#') && tab === 'addContact'){
            return
        }

        if(tab === 'addContact'){

            setSearch(value.replace('#',''))
            return
        }

        setSearch(value)
        return
    }

    return handleSearch

}

export default useHandleSearch
