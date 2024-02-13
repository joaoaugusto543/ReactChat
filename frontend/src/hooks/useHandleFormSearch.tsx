import { filterGroupsPublicThunk, filterMyGroupsThunk } from '../slices/groupSlice'
import { filterContactsThunk, getUserByCodeThunk, resetError, resetUserCode } from '../slices/userSlice'
import { useAppDispatch, useAppSelector } from '../store'

type Props = {
    tab:string,
    search:string,
    setSearch:Function
}

function useHandleFormSearch({tab,search,setSearch}: Props) {

    const dispatch=useAppDispatch()

    const {token}=useAppSelector(state => state.auth)

    function handleFormSearch(e:React.SyntheticEvent){

        e.preventDefault()

        if(!token){
            return
        }

        if(tab === 'addContact'){
            
            if(!search){
                dispatch(resetError())
                dispatch(resetUserCode())
                return
            }

            dispatch(getUserByCodeThunk({code:search,token}))
            return
        }

        if(tab === 'contact'){

            if(!search){

                //This is used as a parameter in the url to not call another route

                const empty='empty'

                dispatch(filterContactsThunk({search:empty,token}))
                return 
            }

            dispatch(filterContactsThunk({search,token}))
            return
        }

        if(tab === 'addGroup'){

            if(!search){
                const empty='empty'

                dispatch(filterGroupsPublicThunk({search:empty,token}))
                return
            }

            dispatch(filterGroupsPublicThunk({token,search}))
            return
        }

        if(tab === 'groups'){

            if(!search){
                const empty='empty'

                dispatch(filterMyGroupsThunk({search:empty,token}))
                return
            }

            dispatch(filterMyGroupsThunk({search,token}))
            return
        }
        
        return
    }

    function handleClearFormSearch(e:React.SyntheticEvent){
        e.preventDefault()

        setSearch('')

        if(!token){
            return
        }

        if(tab === 'addContact'){
            dispatch(resetError())
            dispatch(resetUserCode())
            return
        }

        if(tab === 'contact'){

            //This is used as a parameter in the url to not call another route

            const empty='empty'

            dispatch(filterContactsThunk({search:empty,token}))
        }

        if(tab === 'addGroup'){

            //This is used as a parameter in the url to not call another route

            const empty='empty'

            dispatch(filterGroupsPublicThunk({token,search:empty}))
            return
        }

        if(tab === 'groups'){

            //This is used as a parameter in the url to not call another route

            const empty='empty'

            dispatch(filterMyGroupsThunk({search:empty,token}))
            return
        }
    }

    return {handleFormSearch,handleClearFormSearch}

}

export default useHandleFormSearch
