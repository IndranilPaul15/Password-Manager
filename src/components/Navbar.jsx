import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#FFD7C4] flex justify-between items-center h-10 ">
      <div className="logo md:px-5 font-bold text-blue-600 flex items-center">
        <iframe className='w-16' src="https://lottie.host/embed/8575a855-a015-4f63-932a-55131396798c/Ez9U48NjoS.json"></iframe>
        <a className='text-xl hidden md:block' href="#">iPassword</a>
      </div>
      <ul>
        <li className='md:px-5 px-3 flex gap-2 md:gap-3'>
          <a className='hover:font-extrabold' href="#">Home</a>
          <a className='hover:font-extrabold' href="#">About</a>
          <a className='hover:font-extrabold' href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
