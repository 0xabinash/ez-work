import React from 'react'

const Card = ({data}) => {

  const { icon, title, content} = data;
  
  return (
    <div className='card'>
      <div className='card__header'>
        <i className={icon} />
        <span className='card__title'>{title}</span>
      </div>
      <div className='card__content'>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card;