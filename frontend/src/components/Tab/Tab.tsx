import { TabState } from '../../interfaces/InterfaceReducerNavBar'
import AddContact from '../AddContact/AddContact'
import Contacts from '../Contacts/Contacts'
import Groups from '../Groups/Groups'
import GroupsPublics from '../GroupsPublics/GroupsPublics'

type Props = {
    state:TabState
}

function Tab({state}: Props) {
  return (
    <>
        {state.tab==='contact' && <Contacts/>}
        {state.tab==='groups' && <Groups/>}
        {state.tab==='addContact' && <AddContact/>}
        {state.tab==='addGroup' && <GroupsPublics/>}
        {state.tab==='notification' && <h1>noti</h1>}
    </>
  )
}

export default Tab