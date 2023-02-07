import React from 'react'
import image1 from '../../assets/homePage/image1.jpg'
interface CardProps {
    title: string
    image: any,
    opacity: number
}

const Card:React.FC<CardProps> = ({title,image,opacity}) => {
  return (
    <div>
        <div className='w-full h-full object-fit'>
            <img src={image1} alt="suit categories" className='w-full h-full'/>
            <div>
                <div className=''>
                    <p className='text-[20px]'>{title}</p>
                    <button className='bg-green-400 text-black border'>View products</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card