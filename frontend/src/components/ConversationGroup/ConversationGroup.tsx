import { useState } from 'react'
import { UserInterface } from '../../interfaces/UserInterface'
import styles from './ConversationGroup.module.css'
import { MessageGroupInterface } from '../../interfaces/MessageGroupInterface'
import useFilterMessagesGroup from '../../hooks/useFilterMessagesGroup'
import Message from '../Message/Message'
import { useAppSelector } from '../../store'

type Props = {
    messages:MessageGroupInterface[],
    id:number | undefined,
    user:UserInterface | null
}

function ConversationGroup({id,messages}:Props) {

  const {messages:messagesThunk} = useAppSelector(state => state.messageGroup)

  const [messagesGroup,setMessagesGroup]=useState<MessageGroupInterface[]>([])

  useFilterMessagesGroup({setMessagesGroup,id,messages})

  const finalMessages=[...messagesThunk,...messagesGroup]

  return (
    <div className={styles.conversationGroup}>
      {messagesGroup && finalMessages.map((message,index)=><Message key={index} name={message.name} text={message.text} supplierUser={message.idUser}/>)}
    </div>
  )
}

export default ConversationGroup
