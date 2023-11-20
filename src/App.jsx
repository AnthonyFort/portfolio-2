import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './components/About'
import Coding from './components/Coding'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Music from './components/Music'
import Nav from './components/Nav'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/coding' element={<Coding />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Music' element={<Music />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
