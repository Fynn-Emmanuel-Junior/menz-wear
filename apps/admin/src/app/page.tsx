'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { Circles } from 'react-loader-spinner'
import { LoginAdmin } from '@/logic/reduxStore/features/admin/adminSlice';
import { useAppDispatch,useAppSelector } from '@/logic/reduxStore/app/hooks';
import { selectAdmin } from '@/logic/reduxStore/features/admin/adminSlice';

 function Home() {
    const [formdata,setFormdata] = useState({
        email: '',
        password: ''
    })

    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)


    const [error,setError] = useState('')

    const router = useRouter()

    const [showpassword,setShowPassword] = useState(false)

    const [text,setText] = useState(false)

    const handleChange = (e: any) => {
        setFormdata({
            ...formdata,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        setText(true)

        console.log('loading...')

		if(formdata.email && formdata.password) {
            dispatch(LoginAdmin(formdata))
            console.log(admin)
            
            if(admin._id) {

                router.push('/dashboard')
            } else if(admin.message == 'Admin not found') {
                setError('Invalid email or password')
                setText(false)
                return ;
            }

		} else {
			setError('please fill credentials')
		}

        
    }

    const handleShowpassword = () => {
        setShowPassword(!showpassword)
    }

  return (
    <main className='flex flex-col items-center gap-5 w-full absolute translate-y-1/2 '>
        <h2 className='text-3xl font-semibold'> menz-wear-admin </h2>
        <div>
            <h3 className='text-xl font-medium'> Login as an Admin </h3>
        </div>
        <div className='text-red-600'>
            {
                error && error
            }
        </div>
        <form className='flex flex-col items-center gap-3 w-2/5'>
            <div className='w-11/12'>
                <input 
                    type='email'
                    placeholder='Email....'
                    id='email'
                    name='email'
                    required
                    value={formdata.email}
                    onChange={handleChange}
                    className='border border-black p-3 focus:outline-teal-600 w-full'
                />
            </div>
            <div className='relative flex items-center w-11/12'>
                <input 
                    type={showpassword ? 'text' : 'password'}
                    placeholder='Password....'
                    id='password'
                    name='password'
                    required
                    value={formdata.password}
                    onChange={handleChange}
                    className='border border-black p-3 focus:outline-teal-600 w-full'
                />
                <div 
                    className='absolute right-5 cursor-pointer'
                    onClick={handleShowpassword}
                >
                    {
                        showpassword ? <FaRegEye /> : <FaRegEyeSlash />
                    }
                </div>
            </div>
            <button 
                type='button'  
                className='bg-black text-white p-4 w-3/5 mx-auto'
                onClick={handleSubmit}
                >
                <div className='text-center flex flex-col items-center'>
                {
                    text && !error  ? <div className='flex  items-center'>
                                    	<span className='mr-2'>Loading</span>
                                            <Circles
                                                height="20"
                                                width="20"
                                                color="#ffffff"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                                visible={true}
                                            />
                                        </div> : 'Login'
                }
                </div>
            </button>
        </form>
    </main> 

  ) 
}
 
export default Home