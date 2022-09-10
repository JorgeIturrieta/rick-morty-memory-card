import React, { FunctionComponent } from 'react'
import { useAppSelector } from '../../app/hooks'
import { useCards } from '../../hooks/useCards'
import FrontCard from '../image/FrontCard'

type ListCardsProps = {
  loading: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onComplete: any
}
const ListCards: FunctionComponent<ListCardsProps> = ({ loading, onComplete }) => {
  const cards = useAppSelector((state) => state.board.cards)
  const { handleSelect } = useCards()

  return (
    <div className={'flex-container fade-in'}>
      {cards.map((card) => (
        <div
          hidden={loading}
          className={`card-container ${card.isMatch ? 'shake' : ''}`}
          key={card.id}
          onClick={() => handleSelect(card)}
        >
          <div className={`card-content  ${card.flipped ? 'card-flipped ' : ''}`}>
            <div className={'card-front'}>
              <FrontCard width={80} height={150} fill={'white'} />
            </div>
            <div className={'card-back'}>
              <p>{card.name}</p>
              <img src={card.image} alt={card.name} onLoad={onComplete} onError={onComplete} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
const ListCardsMemo = React.memo(ListCards)
export default ListCardsMemo
