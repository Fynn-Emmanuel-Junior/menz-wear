import React from 'react'

interface CustomInputProps {}

const CustomInput:React.FC<CustomInputProps> = () => {
  return (
    <div className='relative w-[30vw] mx-auto'>
        <input 
            type="email" 
            name='email' 
            id='email' 
            className='focus:outline-none border border-black w-full p-3 peer'
        />
        <label className='transition-all duration-300 absolute left-3 top-3 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-white peer-focus:pointer-events-none p-1'>
			Email
		</label>
    </div>
  )
}

export default CustomInput