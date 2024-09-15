import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className='min-h-[85.3vh] md:min-h-[89.3vh]'>
        <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App
