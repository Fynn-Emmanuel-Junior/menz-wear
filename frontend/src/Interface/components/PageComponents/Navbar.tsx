import React from 'react'
import { Link } from 'react-router-dom'

type NavProps = {}

const Navbar = () => {
  return (
    <nav className='w-[50%] mx-auto'>
		<ul className='flex justify-between text-sm'>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[1000ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Suits
				</Link>
			</li>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[1000ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Shirts
				</Link>
			</li>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[5000ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Suits Seperates
				</Link>
			</li>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[1500ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Hats
				</Link>
			</li>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[5000ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Accessories
				</Link>
			</li>
			<li className='relative before:hover:visible before:hover:w-[100%] before:transition-[5000ms]  before:invisible before:content-[""] before:w-0 before:h-0.5 before:absolute  before:bottom-[-15px] before:bg-black'>
				<Link to={''} className='navbar text-slate-700 hover:text-black font-light'>
					Walking Suits
				</Link>
			</li>
		</ul>
    </nav>
  )
}

export default Navbar