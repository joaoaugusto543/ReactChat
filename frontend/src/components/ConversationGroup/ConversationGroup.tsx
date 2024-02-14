import { useEffect, useRef, useState } from 'react'
import { UserInterface } from '../../interfaces/UserInterface'
import styles from './ConversationGroup.module.css'
import { MessageGroupInterface } from '../../interfaces/MessageGroupInterface'
import useFilterMessagesGroup from '../../hooks/useFilterMessagesGroup'
import Message from '../Message/Message'
import { useAppSelector } from '../../store'
import useScrollDown from '../../hooks/useScrollDown'

type Props = {
    messages:MessageGroupInterface[],
    id:number | undefined,
    user:UserInterface | null
}

function ConversationGroup({id,messages}:Props) {

  const {messages:messagesThunk} = useAppSelector(state => state.messageGroup)

  const [messagesGroup,setMessagesGroup]=useState<MessageGroupInterface[]>([])

  const bottomRef= useRef<HTMLInputElement>(null)

  useFilterMessagesGroup({setMessagesGroup,id,messages})

  const finalMessages=[...messagesThunk,...messagesGroup]

  const scrollDown=useScrollDown({bottomRef})

  useEffect(()=>{
    scrollDown()
  },[messagesGroup])

  return (
    <div className={styles.conversationGroup}>
      {messagesGroup && finalMessages.map((message,index)=><Message key={index} name={message.name} text={message.text} supplierUser={message.idUser}/>)}
      <div ref={bottomRef}/>
    </div>
  )
}

export default ConversationGroup
