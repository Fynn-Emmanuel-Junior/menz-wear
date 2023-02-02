import React from 'react'

type CardProps = {
    title: string
    image: any
}

const Card:React.FC<CardProps> = ({title,image}) => {
  return (
    <div>
        Card
    </div>
  )
}

export default Card