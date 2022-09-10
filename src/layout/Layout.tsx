import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
      <footer>
        <a href='https://www.linkedin.com/in/jorge-iturrieta/' target={'_blank'} rel={'noreferrer'}>
          Coded by Jorge Iturrieta 🇦🇷
        </a>
      </footer>
    </div>
  )
}

export default Layout
