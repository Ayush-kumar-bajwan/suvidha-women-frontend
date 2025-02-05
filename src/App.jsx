import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full'> 
    {/* <h1 className='w-full h-12 bg-black text-white'> welcome to home page</h1> */}
    <div>
      <Contact />
      <Footer />
    </div>
    </div>
  )
}

export default App