import './styles.scss'
import image from '../../assets/images/rick-morty.png'
import { useState } from 'react'

import Modal from '../../features/modal/Modal'
import MessageContainer from '../../features/message/MessageContainer'
import { useNavigate } from 'react-router-dom'
import { messages } from '../../common/messages'
import StatsMessage from '../../features/message/StatsMessage'
const Home = () => {
  const [openModal, setOpenModal] = useState(0)
  const navigate = useNavigate()

  return (
    <main>
      <div className='home-container'>
        <h1 className='title'>Welcome to Rick and Morty Memory card Game</h1>

        <img className='fade-in' src={image} width={300} height={350} alt='rick-and-morty' />
        <div className='btn-container'>
          <button onClick={() => setOpenModal(1)}>How to play</button>
          <button onClick={() => setOpenModal(2)}>Stats</button>
          <button onClick={() => navigate('/stage')}>Play</button>
        </div>
      </div>
      {openModal ? (
        <Modal>
          {openModal === 1 ? (
            <MessageContainer
              setOpenModal={setOpenModal}
              title={messages[0].title}
              message={messages[0].message}
            />
          ) : openModal === 2 ? (
            <MessageContainer setOpenModal={setOpenModal} title={messages[1].title}>
              <StatsMessage />
            </MessageContainer>
          ) : (
            <></>
          )}
        </Modal>
      ) : null}
    </main>
  )
}

export default Home
