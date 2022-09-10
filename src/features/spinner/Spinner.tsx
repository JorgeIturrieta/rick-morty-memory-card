import style from './Spinner.module.scss'
import { FunctionComponent } from 'react'
type SpinnerProps = {
  message: string
}
const Spinner: FunctionComponent<SpinnerProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <div className={`${style.circle} ${style.sp}`}></div>
    </div>
  )
}

export default Spinner
