import React,{useState} from 'react'
import Layout from '../../../components/Layouts/Layout'
import { Link } from 'react-router-dom'
import { Footer } from '../../../components/PageComponents/Footer'

interface SignInProps {}

const SignIn:React.FC<SignInProps> = () => {
	const [formData,setFormData] = useState({})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}
  return (
    <Layout>
    	<div className='w-4/5 sm:max-w-md mx-auto mt-[4%] text-center'>
			<h3 className='text-xl'>Login</h3>
			<p className='mt-5'>Please enter your e-mail and password:</p>
			<div className='mt-5 flex flex-col gap-4'>
				<div>
					<input 
						type="email" 
						id='email'
						placeholder='Email '
						className='border border-black focus:outline-none w-full p-3 text-sm'
						onChange={handleChange}
						required 
					/>
				</div>
				<div className='flex items-center gap-3 border border-black'>
					<input 
						type="password" 
						id='password'
						placeholder='Password'
						className='focus:outline-none flex-1  p-3 text-sm'
						onChange={handleChange}
						required 
					/>
					<span className='text-sm mr-3 cursor-pointer'>
						Forgot Password?
					</span>
				</div>
				<button className='bg-black p-3 text-white'>Login</button>
				<div className='text-sm'>
					<span className='text-slate-500'> Don't have an account? {" "}</span>
					<span>
						<Link to='/signup'>
							Create one
						</Link>
					</span>
				</div>
			</div>
		</div>
		<Footer />
    </Layout>
  )
}

export default SignIn