import React from 'react'
import HomeBase from './pages/base/home-base'
import NavBar from './components/nav-bar-component/nav-bar-component'
import FooterBar from './components/footer-bar-component/footer-bar-component'
import './App.css'

const App = () => {
  return (
    <>
      <NavBar/>
      <HomeBase/>
      <FooterBar/>
    </>
  )
}

export default App
