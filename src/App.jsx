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
import Project from './components/Project'
import Tutorial from './components/Tutorial'
import Work from './components/Work'

function App() {

  return (
    <body>
      <Nav />
      <Routes>
      <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/coding' element={<Coding />} />
        <Route path='/coding/:projectId' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/music' element={<Music />} />
        <Route path='/music/tutorial/:tutorialId' element={<Tutorial />} />
        <Route path='/music/:workId' element={<Work />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </body>
  )
}

export default App
