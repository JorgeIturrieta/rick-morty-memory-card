import { FunctionComponent } from 'react'

import styles from './Message.module.scss'
type MessageProps = {
  title: string
  message?: string
  setOpenModal: React.Dispatch<React.SetStateAction<number>>
  children?: JSX.Element
}
const MessageContainer: FunctionComponent<MessageProps> = ({
  title,
  message,
  setOpenModal,
  children,
}) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.messageContainer}>
        {message && <p>{message}</p>}
        {children}
      </section>

      <button onClick={() => setOpenModal(0)}>Close</button>
    </>
  )
}

export default MessageContainer
