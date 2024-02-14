import { useParams } from 'react-router-dom'
import ConversationHeader from '../../components/ConversationHeader/ConversationHeader'
import styles from './Group.module.css'
import ConversationForm from '../../components/ConversationForm/ConversationForm'
import React, { useEffect, useState } from 'react'
import ConversationGroup from '../../components/ConversationGroup/ConversationGroup'
import useConnSocket from '../../hooks/useConnSocket'
import { useAppSelector } from '../../store'
import useAddMessageGroup from '../../hooks/useAddMessageGroup'
import useCreateMessageGroup from '../../hooks/useCreateMessageGroup'
import { MessageGroupInterface } from '../../interfaces/MessageGroupInterface'
import useFetchMessagesGroup from '../../hooks/useFetchMessagesGroup'
import useFetchGroup from '../../hooks/useFetchGroup'
import LoaderConversation from '../../components/Loaders/LoaderConversation/LoaderConversation'
import useVerifyGroup from '../../hooks/useVerifyGroup'

function Group() {

  const {id}=useParams() 
  
  const [text,setText]=useState<string>('')

  useFetchMessagesGroup({id})

  const [socket,setSocket]=useState<any>(null)

  const [messages,setMessages]=useState<any[]>([])

  const {user} = useAppSelector(state => state.user)

  const {group,loading} = useAppSelector(state => state.group)

  useFetchGroup({id})

  useConnSocket({setSocket})

  useVerifyGroup({group,id:user?.id})

  const createMessage=useCreateMessageGroup()

  const addMessage=useAddMessageGroup({setMessages,socket})

  useEffect(()=>{
    if(socket){
        addMessage()
    }
  },[socket])

  function handleSubmit(e:React.BaseSyntheticEvent){
    e.preventDefault()

    if(!id || !user || !text){
        return
    }

    const newMessage:MessageGroupInterface={
        idGroup:parseInt(id),
        name:user.name,
        idUser:parseInt(user.id),
        text
    }

    socket.emit('message_group',newMessage)

    createMessage(newMessage)

    setSocket(socket)
    setText('')
    
  }

  return (
    <>
      {group && user && !loading ?
        <div className={styles.group}>
          <ConversationHeader name={group.name} image={group.image} isGroup={true}/>
          <ConversationGroup messages={messages} id={id ? parseInt(id) : 1} user={user}/>
          <ConversationForm text={text} setText={setText} handleSubmit={handleSubmit}/>
        </div>
        :
        <LoaderConversation/>
      }
    </>
  )
}

export default Group
