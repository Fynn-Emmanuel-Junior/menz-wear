import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Interface/pages/auth/Home/Home'
import SignIn from './Interface/pages/guest/SignIn/SignIn'
import SignUp from './Interface/pages/guest/SignUp/SignUp'

function App() {
  return (
    <Routes>
		<Route path='/' element={<Home />}/>
		<Route path='/signup' element={<SignUp />} />
		<Route path='signin' element={<SignIn />} />
    </Routes>

  )
}

export default App
