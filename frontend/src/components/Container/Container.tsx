import React from 'react'
import styles from './Container.module.css'

type Props={
    children:React.ReactNode
}

function Container({children}:Props) {
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        {children}
      </div>
    </div>
  )
}

export default Container
