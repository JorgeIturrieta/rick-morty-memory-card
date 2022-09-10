import { FunctionComponent } from 'react'
import styles from './Modal.module.scss'
type ModalProps = {
  children: JSX.Element
}
const Modal: FunctionComponent<ModalProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  )
}

export default Modal
