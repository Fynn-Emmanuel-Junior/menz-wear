import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiSearch } from 'react-icons/fi'

interface HeaderProps  {}

const Header = () => {
  const cart = useSelector((state:any) => state.cart.cart)
  
  return (
    <div className='mt-[10px]'>
            <div className='ml-[40%] text-center flex justify-between items-center'>
                <div>
                    <Link to={'/'} className='text-slate-500 hover:text-slate-500'>
                        <h1 className='text-center'>menz wear</h1>
                        <p className='text-center text-xs text-slate-600'>MENS WEAR EXPERTS || GH ONLY</p>
                    </Link>
                </div>
                <div className='w-[350px]'>
                    <ul className='flex justify-between items-center mr-10 text-sm font-light'>
                        <li className='flex'>
                            <Link to={'/signin'} className='text-slate-700 hover:text-black font-light'>Sign in / </Link>
                            <Link to={'/signup'} className='text-slate-700 hover:text-black font-light'>Register</Link>
                        </li>
                        <li>
                            <Link to={''} className='flex text-slate-700 hover:text-black font-light'>
                                <FiSearch size={20}/>
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link to={''} className='text-slate-700 hover:text-black font-light'>
                                Cart({cart})
                            </Link>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
  )
}

export default Header