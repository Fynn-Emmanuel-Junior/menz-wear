import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import banner from '../../../assets/bannerImg/banner1.jpg'

type Homeprops = {}

const Home:React.FC<Homeprops> = () => {
  return (
    <Layout>
    	<header>
			<div className='w-full h-[72vh]'>
				<img src={banner} alt={'banner'} className='w-full h-full'/>
			</div>

		</header>
    </Layout>
  )
}

export default Home