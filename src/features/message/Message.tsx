import { FunctionComponent } from 'react'

import styles from './Message.module.scss'
type MessageProps = {
  message: string
  children?: JSX.Element
}
const Message: FunctionComponent<MessageProps> = ({ message, children }) => {
  return (
    <>
      <h2 className={styles.title}>{message}</h2>

      {children}
    </>
  )
}

export default Message
