// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import WelcomeScreen from './WelcomeScreen'
// import Login from './Login'
// import SignUp from './SignUp'
// import { Route, Routes } from 'react-router-dom'
import History from './History'

function App() {  

  return (
    <>
      <Login/>
      {/* <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/' element={<Login/>} />
      </Routes> */}
      {/* <History/> */}
    </>
  )
}

export default App
