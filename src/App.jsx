import React from 'react'
import CardSection from './component/CardSection'
import Navbar from './component/Navbar'

let NavLinks = ["Home", "About", "Service", "Contact"]

function App() {
  return (
    <>
      <Navbar NBrand="Your Brand" Link={NavLinks} />
      <CardSection />
    </>
  )
}

export default App;