import { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Router } from './components/Routers/Router'

function App() {

  return (
    <div className="App">
      Hello
      <Router/>
      <Footer/>
    </div>
  )
}

export default App
