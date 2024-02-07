type Props={
    dispatch:Function
}

function useDispatchNavBar({dispatch}:Props) {
  
    async function handleSwitchToContact(){
        dispatch({type:'CONTACT'})
    }

    async function handleSwitchGroups() {
        dispatch({type:'GROUPS'})
    }

    async function handleSwitchAddContact() {
        dispatch({type:'ADD_CONTACT'})
    }

    async function handleSwitchNotification() {
        dispatch({type:'NOTIFICATION'})
    }

    return {handleSwitchAddContact,handleSwitchNotification,handleSwitchGroups,handleSwitchToContact}

}

export default useDispatchNavBar

