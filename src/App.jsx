import React from 'react'
import CardSection from './component/CardSection'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

let NavLinks = ["Home", "About", "Service", "Contact"]

function App() {
  return (
    <>
      <Navbar NBrand="Your Brand" Link={NavLinks} />
      <CardSection />
      <Footer />
    </>
  )
}

export default App;