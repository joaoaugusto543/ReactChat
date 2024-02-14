type Props = {
    bottomRef:any
}

function useScrollDown({bottomRef}: Props) {

  function scrollDown(){

    if(bottomRef.current){
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }

  }

  return scrollDown
}

export default useScrollDown
