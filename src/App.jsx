import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import AboutSection from './component/AboutSection'

const App = () => {
  return (
    <div className="overflow-hidden">
      <Home/>
      <Navbar />
       <AboutSection/>

    </div>
  )
}

export default App