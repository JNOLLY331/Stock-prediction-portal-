import React from 'react'
import './assets/css/style.css'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter> 
          <Header />
          <Routes>
            <Route path='/' element={ <Main  />  }/>
            <Route path='/register' element={<Register  />} />
            <Route path='/login' element={<Login />} />         
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
