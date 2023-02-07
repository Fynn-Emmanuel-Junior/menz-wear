import React from 'react'
import Layout from '../../../components/Layouts/Layout'
import banner from '../../../assets/bannerImg/banner1.jpg'
import Card from '../../../components/HomeComponents/Card'

interface Homeprops  {}

const Home:React.FC<Homeprops> = () => {
  return (
    <Layout>
    	<header className=''>
			<div className='w-full h-[72vh]'>
				<img src={banner} alt={'banner'} className='w-full h-full'/>
			</div>
			<div className='w-[95%] mx-auto mt-10 flex justify-between'>
				<div className='w-[32%] h-[35%]'>
					<Card 
						title='Double Breasted'
						image=""
						opacity={30}
					/>
				</div>
				<div className='w-[32%] h-[35%]'>
					<Card 
						title='Double Breasted'
						image=""
						opacity={30}
					/>
				</div>
				<div className='w-[32%] h-[35%]'>
					<Card 
						title='Double Breasted'
						image=""
						opacity={30}
					/>
				</div>


			</div>

		</header>
    </Layout>
  )
}

export default Home