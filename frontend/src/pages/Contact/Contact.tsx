import styles from './Contact.module.css'
import { useParams } from 'react-router-dom'
import ConversationHeader from '../../components/ConversationHeader/ConversationHeader'
import ConversationForm from '../../components/ConversationForm/ConversationForm'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../store'
import Conversation from '../../components/Conversation/Conversation'
import useConnSocket from '../../hooks/useConnSocket'
import useAddMessage from '../../hooks/useAddMessage'
import useFetchContact from '../../hooks/useFetchContact'
import { MessageInterface } from '../../interfaces/MessageInterface'
import useCreateMessage from '../../hooks/useCreateMessage'
import useFetchMessages from '../../hooks/useFetchMessages'
import LoaderConversation from '../../components/Loaders/LoaderConversation/LoaderConversation'
import useVerifyContact from '../../hooks/useVerifyContact'

function Contact() {

  const {id}=useParams()

  const [socket,setSocket]=useState<any>(null)

  const [text,setText]=useState<string>('')

  useFetchMessages({id})
  
  const {messages:messagesThunk} = useAppSelector(state => state.message)
  
  const [messages,setMessages]=useState<MessageInterface[]>([...messagesThunk])

  const {user,contact,loading}=useAppSelector(state => state.user)

  const createMessage=useCreateMessage()

  useFetchContact({id})
  useVerifyContact({user,id})

  useConnSocket({setSocket})

  const addMessage= useAddMessage({setMessages,socket})

  useEffect(()=>{
    if(socket){
      addMessage()
    }
  },[socket])


  async function handleSubmit(e:React.BaseSyntheticEvent){

    e.preventDefault()

    if(!text || loading || !user || !contact){
      return
    }

    const messageData:MessageInterface={
      text,
      supplierUser:parseInt(user.id),
      idsUser:[parseInt(contact.id),parseInt(user.id)],
      name:user.name
    }

    socket.emit('message',messageData)

    createMessage(messageData)
    setSocket(socket)
    setText('')
  }

  return (
    <>
      {user && contact && !loading ?
        <section className={styles.contact}>
            <ConversationHeader name={contact.name} image={contact.profileImage} isGroup={false}/>
            <Conversation messages={messages} id={parseInt(contact.id)} user={user}/>
            <ConversationForm handleSubmit={handleSubmit} setText={setText} text={text}/>
        </section>
        :
        <LoaderConversation/>
      }
    
    </>
  )
}

export default Contact
