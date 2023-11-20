import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import banner from '../../../assets/bannerImg/banner1.jpg'
import Card from '../../../components/PageComponents/HomeComponents/Card'

interface Homeprops  {}

const Home:React.FC<Homeprops> = () => {
  return (
    <Layout>
    	<header className=''>
			<div className='w-full h-[72vh]'>
				<img src={banner} alt={'banner'} className='w-full h-full'/>
			</div>
			<div className=''>
				
			</div>

		</header>
    </Layout>
  )
}

export default Home