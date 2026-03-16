import React from 'react'
import RightCardContent from './rightCardContent'

const rightCard = (prop) => {
  return (
    <div className='h-full relative rounded-4xl w-80 overflow-hidden shrink-0 '>
        <img className='h-full w-full object-cover' src={prop.img} alt="" />
        <RightCardContent color={prop.color} id={prop.id} tag={prop.tag} />
    </div>
  )
}

export default rightCard