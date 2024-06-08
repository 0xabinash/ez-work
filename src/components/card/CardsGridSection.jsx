import React from 'react';
import Card from './Card';
import { cardData } from '../../data';


const CardsGridSection = () => {

  return (
    <div
      className='cards__container'
    >
      {
        cardData.map((card, i)=>(
          <Card key={`${i}${card.title}`} data={card} />
        ))
      }
    </div>
  )
}

export default CardsGridSection;