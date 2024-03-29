import { useEffect, useRef, useState } from 'react'
import styles from './Conversation.module.css'
import { UserInterface } from '../../interfaces/UserInterface'
import useFilterMyMessages from '../../hooks/useFilterMyMessages'
import { MessageInterface } from '../../interfaces/MessageInterface'
import Message from '../Message/Message'
import { useAppSelector } from '../../store'
import useScrollDown from '../../hooks/useScrollDown'

type Props = {
  messages:MessageInterface[],
  id:number | undefined,
  user:UserInterface | null
}

function Conversation({messages,id,user}: Props) {

  const {messages:messagesThunk}=useAppSelector(state => state.message)

  const bottomRef= useRef<HTMLInputElement>(null)
  
  const [myMessages,setMyMessages]=useState<MessageInterface[]>([])

  useFilterMyMessages({messages,id,user,setMyMessages})

  const finalMessages=[...messagesThunk,...myMessages]

  const scrollDown=useScrollDown({bottomRef})

  useEffect(()=>{
    scrollDown()
  },[myMessages])
  
  return (
   
    <div className={styles.conversation}>
        {myMessages && finalMessages.map((message,index)=> <Message key={index} name={message.name} text={message.text} supplierUser={message.supplierUser}/>)}
        <div ref={bottomRef}/>
    </div>

  )
}

export default Conversation