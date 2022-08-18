import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}