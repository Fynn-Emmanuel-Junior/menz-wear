import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import CustomInput from '../../../components/Customs/CustomInput'

interface SignInProps {}

const SignIn:React.FC<SignInProps> = () => {
  return (
    <Layout>
    	<div className='w-2/4 mx-auto mt-[4%] text-center'>
			<h3 className='text-xl'>Login</h3>
			<p className='mt-5'>Please enter your e-mail and password:</p>
			<div className='mt-5'>
				<div>
					<CustomInput />
				</div>
				<div className='mt-5'>

				</div>
			</div>
		</div>
    </Layout>
  )
}

export default SignIn