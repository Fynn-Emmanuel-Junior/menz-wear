import React from 'react'
import Navbar from '../PageComponents/Navbar'
import Header from '../PageComponents/Header'

type LayoutProps = {
    children: any
}

const Layout:React.FC<LayoutProps>= ({children}) => { 
  return (
    <div className='font-poppins'>
        <p className='bg-black text-white h-[40px] text-center pt-[10px] font-sans'>Limited Time Only : Seasonal Clearance Sale</p>
        <Header />
        <div className='mt-[20px] mb-[20px]'>
            <Navbar />
        </div>
        <hr />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout