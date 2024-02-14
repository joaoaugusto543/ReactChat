import React from 'react'
import styles from './Container.module.css'

type Props={
    children:React.ReactNode,
    token:string | null
}

function Container({children,token}:Props) {

  if(!token){
    return(<>{children}</>)
  }

  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        {children}
      </div>
    </div>
  )
}

export default Container
